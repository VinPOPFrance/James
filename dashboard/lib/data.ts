import 'server-only';
import { Pool, type QueryResultRow } from 'pg';

declare global {
  var jamesPool: Pool | undefined;
}

function pool() {
  if (!globalThis.jamesPool) {
    const raw = process.env.DATABASE_URL;
    let connectionString: string | undefined;
    if (raw) {
      const url = new URL(raw);
      for (const key of ['sslmode', 'sslcert', 'sslkey', 'sslrootcert']) url.searchParams.delete(key);
      connectionString = url.toString();
    } else if (!process.env.PGHOST || !process.env.PGDATABASE || !process.env.PGUSER || !process.env.PGPASSWORD) {
      throw new Error('James database connection is not configured.');
    }
    globalThis.jamesPool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: true },
      max: 2,
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 10000,
    });
  }
  return globalThis.jamesPool;
}

type Metric = { spend: string | null; clicks: string | null; rows: string };
type Campaign = QueryResultRow & { name: string; spend: string; clicks: string };
type SitePage = QueryResultRow & { path: string; views: string; engagement: string };
type Freshness = QueryResultRow & { source: string; rows: string; last_extraction: Date | null; latest_date: string | null };

export async function getReport(from: string, to: string) {
  const client = await pool().connect();
  try {
    await client.query('BEGIN READ ONLY');
    await client.query("SET LOCAL statement_timeout = '15s'");
    const google = (await client.query<Metric>(
      `SELECT SUM(metrics_cost_micros)/1000000.0 AS spend,
        SUM(metrics_clicks) AS clicks, COUNT(*)::text AS rows
       FROM public.custom_campaign_device WHERE segments_date BETWEEN $1::date AND $2::date`, [from, to],
    )).rows[0];
    const meta = (await client.query<Metric>(
      `SELECT SUM(spend) AS spend, SUM(clicks) AS clicks, COUNT(*)::text AS rows
       FROM public.ads_insights WHERE date_start BETWEEN $1::date AND $2::date`, [from, to],
    )).rows[0];
    const sessions = (await client.query<{ sessions: string | null; rows: string }>(
      `SELECT SUM(sessions)::text AS sessions, COUNT(*)::text AS rows FROM public.traffic_sources
       WHERE date BETWEEN replace($1, '-', '') AND replace($2, '-', '')`, [from, to],
    )).rows[0];
    const campaigns = (await client.query<Campaign>(
      `SELECT campaign_name AS name, SUM(metrics_cost_micros)/1000000.0 AS spend,
        SUM(metrics_clicks)::text AS clicks FROM public.custom_campaign_device
       WHERE segments_date BETWEEN $1::date AND $2::date
       GROUP BY campaign_id, campaign_name ORDER BY SUM(metrics_cost_micros) DESC`, [from, to],
    )).rows;
    const metaCampaigns = (await client.query<Campaign>(
      `SELECT campaign_name AS name, SUM(spend)::text AS spend, SUM(clicks)::text AS clicks
       FROM public.ads_insights WHERE date_start BETWEEN $1::date AND $2::date
       GROUP BY campaign_id,campaign_name ORDER BY SUM(spend) DESC`, [from, to],
    )).rows;
    const pages = (await client.query<SitePage>(
      `SELECT "pagePath" AS path, SUM("screenPageViews")::text AS views,
        SUM("userEngagementDuration")::text AS engagement FROM public.pages_path_report
       WHERE date BETWEEN replace($1, '-', '') AND replace($2, '-', '')
       GROUP BY "pagePath" ORDER BY SUM("screenPageViews") DESC LIMIT 20`, [from, to],
    )).rows;
    const freshness = (await client.query<Freshness>(
      `SELECT 'Google Ads' AS source,COUNT(*)::text AS rows,
        MAX(_airbyte_extracted_at) AS last_extraction,MAX(segments_date)::text AS latest_date
       FROM public.custom_campaign_device
       UNION ALL SELECT 'Meta',COUNT(*)::text,MAX(_airbyte_extracted_at),MAX(date_start)::text FROM public.ads_insights
       UNION ALL SELECT 'GA4',COUNT(*)::text,MAX(_airbyte_extracted_at),MAX(date) FROM public.traffic_sources`,
    )).rows;
    await client.query('COMMIT');
    return { google, meta, sessions, campaigns, metaCampaigns, pages, freshness };
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('James report query failed', { code: error && typeof error === 'object' && 'code' in error ? error.code : 'unknown' });
    throw error;
  } finally {
    client.release();
  }
}
