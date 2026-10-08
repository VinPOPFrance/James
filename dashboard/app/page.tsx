import Link from 'next/link';
import { requireAuth } from '../lib/auth';
import { getReport, type AdvertisingRow } from '../lib/data';
import { parsePeriod } from '../lib/period.mjs';
import { dividedMetric } from '../lib/advertising.mjs';

export const dynamic = 'force-dynamic';
const sections = ['overview', 'advertising', 'website', 'actions'] as const;
const labels = ['Overview', 'Advertising', 'Website & offer', 'Actions & tests'];
const money = (value: string | null) => value === null ? 'Not available' :
  new Intl.NumberFormat('en-NL', { style: 'currency', currency: 'EUR' }).format(Number(value));
const count = (value: string | null) => value === null ? 'Not available' :
  new Intl.NumberFormat('en-NL').format(Number(value));

export default async function Dashboard({ searchParams }: {
  searchParams: Promise<{ section?: string; from?: string; to?: string }>;
}) {
  await requireAuth();
  const params = await searchParams;
  const section = sections.find(value => value === params.section) ?? 'overview';
  let period: { from: string; to: string };
  try { period = parsePeriod(params.from, params.to); }
  catch (error) {
    return <main className="shell"><h1>Invalid date range</h1><p role="alert">
      {error instanceof Error ? error.message : 'Invalid dates.'}
    </p><Link href="/">Reset filters</Link></main>;
  }
  const report = await getReport(period.from, period.to);
  return <div className="shell">
    <header><div><p className="eyebrow">JAMES DAIME / PERFORMANCE</p>
      <h1>Turn attention into meaningful appointments.</h1>
      <p>Understand your acquisition. Improve your offer. Measure what matters.</p></div>
      <form method="post" action="/api/logout"><button className="secondary">Sign out</button></form>
    </header>
    <nav aria-label="Dashboard sections">{sections.map((value, index) =>
      <Link key={value} aria-current={section === value ? 'page' : undefined}
        href={`/?section=${value}&from=${period.from}&to=${period.to}`}>{labels[index]}</Link>)}</nav>
    <form className="filters" method="get">
      <input type="hidden" name="section" value={section} />
      <label>From<input name="from" type="date" defaultValue={period.from} required /></label>
      <label>To<input name="to" type="date" defaultValue={period.to} required /></label>
      <button>Apply dates</button>
      <span>Complete days only · EUR</span>
    </form>
    <p className="notice">Acquisition V1: appointments, qualified leads and clients are not yet measured.
      Google Ads uses Europe/Amsterdam; Meta uses America/Los_Angeles.
      Meta includes only the confirmed James campaign: Webinar - Lower back - 13 Oct.
      New Meta campaigns are excluded until their scope is confirmed.</p>
    {section === 'overview' && <>
      <div className="metrics">
        <article className="card"><p>Google Ads spend</p><strong>{money(report.google.spend)}</strong><small>{count(report.google.clicks)} clicks</small></article>
        <article className="card"><p>Meta James spend</p><strong>{money(report.meta.spend)}</strong><small>{count(report.meta.clicks)} total clicks (not outbound clicks)</small></article>
        <article className="card"><p>GA4 sessions</p><strong>{count(report.sessions.sessions)}</strong><small>All acquisition channels</small></article>
        <article className="card"><p>Qualified appointments</p><strong>Not measured</strong><small>Booking tracking still to validate</small></article>
      </div>
      <section className="card"><h2>Data availability</h2><table><thead><tr><th>Source</th><th>Rows in base</th><th>Latest data date</th><th>Latest extraction</th></tr></thead>
        <tbody>{report.freshness.map(row => <tr key={row.source}><td>{row.source}</td><td>{count(row.rows)}</td>
          <td>{row.latest_date ?? 'No data yet'}</td><td>{row.last_extraction?.toISOString() ?? 'No extraction in final table'}</td></tr>)}</tbody></table>
        <p className="muted">Extraction timestamps do not prove the entire Airbyte job succeeded. No rows in a period means unavailable, not automatically zero spend.</p>
      </section>
    </>}
    {section === 'advertising' && <>
      <Campaigns title="Google Ads campaigns" rows={report.campaigns} />
      <Campaigns title="Meta campaigns · confirmed James scope" rows={report.metaCampaigns} />
      <p className="notice">Meta scope: {report.excludedMeta.campaigns} unconfirmed campaigns with data
        excluded in this period{report.excludedMeta.spend !== null ? ` (${money(report.excludedMeta.spend)})` : ''}.
        Breakdown reports are alternative views, never additional spend.</p>
      <AdvertisingTable title="Google Ads · individual ads" rows={report.googleAds} platform="google" />
      <AdvertisingTable title="Google Ads · devices" rows={report.googleDevices} platform="google" />
      <AdvertisingTable title="Meta · individual ads" rows={report.metaAds} platform="meta" />
      <AdvertisingTable title="Meta · platform, placement & device" rows={report.metaPlacements} platform="placement" />
      <p className="muted">Platform conversions are not treated as qualified appointments or clients.</p>
    </>}
    {section === 'website' && <section className="card"><h2>Most viewed pages</h2>
      <p>Page views, not landing-page sessions. Historical WordPress routes may appear.</p>
      <table><thead><tr><th>Page path</th><th>Page views</th><th>Engagement time (seconds)</th></tr></thead>
        <tbody>{report.pages.map(row => <tr key={row.path}><td>{row.path}</td><td>{count(row.views)}</td><td>{count(row.engagement)}</td></tr>)}</tbody></table>
      {!report.pages.length && <p>No page data available for this period.</p>}
      <p className="muted">Hostname filtering and GA4 timezone remain to be checked. These figures do not yet measure offer-to-booking conversion.</p>
    </section>}
    {section === 'actions' && <section className="card"><h2>Measurement priorities</h2>
      <ol><li>Validate completed SimplyBook bookings, not only booking button clicks.</li>
        <li>Confirm new Meta campaigns before including them; the webinar campaign is already confirmed.</li>
        <li>Compare imported totals against the source platforms for the same dates.</li>
        <li>Confirm GA4 domains and timezone; distinguish old pages from current offers.</li>
        <li>Record qualified appointments and clients before judging cost per client.</li></ol>
      <p className="muted">This is a measurement checklist, not automated advertising advice or a saved experiment tracker.</p>
    </section>}
  </div>;
}

function Campaigns({ title, rows }: {
  title: string; rows: { id: string; name: string; spend: string; clicks: string }[];
}) {
  return <section className="card"><h2>{title}</h2>
    <table><thead><tr><th>Campaign</th><th>Spend</th><th>Clicks</th></tr></thead>
      <tbody>{rows.map(row => <tr key={`${row.id}:${row.name}`}><td>{row.name}</td><td>{money(row.spend)}</td><td>{count(row.clicks)}</td></tr>)}</tbody></table>
    {!rows.length && <p>No campaign data available for this period.</p>}
  </section>;
}

function AdvertisingTable({ title, rows, platform }: {
  title: string; rows: AdvertisingRow[]; platform: 'google' | 'meta' | 'placement';
}) {
  return <section className="card"><h2>{title}</h2>
    <p className="muted">CTR = total clicks / impressions. CPC = spend / total clicks.
      CPM = spend per 1,000 impressions. Ratios use aggregated totals, not averages of daily ratios.</p>
    <table><thead><tr><th>Ad / segment</th><th>Spend</th><th>Impressions</th><th>Clicks</th>
      <th>CTR</th><th>CPC</th><th>CPM</th>
      {platform === 'google' && <th>Google conversions</th>}
      {platform === 'meta' && <><th>Outbound clicks</th><th>Landing page views</th><th>Cost / landing view</th></>}
    </tr></thead><tbody>{rows.map(row => {
      const ctr = dividedMetric(row.clicks, row.impressions, 100);
      return <tr key={`${row.id}:${row.name}`}><td>{row.name}<small style={{ display: 'block' }}>{row.id}</small></td>
        <td>{money(row.spend)}</td><td>{count(row.impressions)}</td><td>{count(row.clicks)}</td>
        <td>{ctr === null ? 'Not available' : `${Number(ctr).toFixed(2)}%`}</td>
        <td>{money(dividedMetric(row.spend, row.clicks))}</td>
        <td>{money(dividedMetric(row.spend, row.impressions, 1000))}</td>
        {platform === 'google' && <td>{count(row.conversions ?? null)}</td>}
        {platform === 'meta' && <><td>{count(row.outbound ?? null)}</td>
          <td>{count(row.landing_views ?? null)}</td>
          <td>{money(dividedMetric(row.spend, row.landing_views ?? null))}</td></>}
      </tr>;
    })}</tbody></table>
    {!rows.length && <p>No data available for this period.</p>}
    {platform === 'google' && <p className="muted">Google conversions are platform-reported events, not verified appointments or clients.</p>}
    {platform === 'meta' && <p className="muted">Landing views use only the landing_page_view action, not the overlapping omni metric.
      Missing action values remain unavailable rather than being assumed zero.
      A low reported landing-view count can reflect tracking or consent issues; it is not proof that visitors failed to load the page.</p>}
  </section>;
}
