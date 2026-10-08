export const META_CAMPAIGN_IDS = ['52533374224650'];

export const META_SCOPE_SQL = 'account_id = $4 AND campaign_id = ANY($3::text[])';
export const META_ACCOUNT_ID = '141739812';

export function metaParameters(from, to) {
  return [from, to, META_CAMPAIGN_IDS, META_ACCOUNT_ID];
}

export function dividedMetric(numerator, denominator, multiplier = 1) {
  if (numerator === null || denominator === null) return null;
  const n = Number(numerator);
  const d = Number(denominator);
  return Number.isFinite(n) && Number.isFinite(d) && d > 0 ? String(n / d * multiplier) : null;
}

export const advertisingQueries = {
  googleAds: `
    SELECT ad_group_ad_ad_id::text AS id,
      campaign_name || ' / ' || ad_group_name AS name,
      SUM(metrics_cost_micros)/1000000.0 AS spend,
      SUM(metrics_clicks)::text AS clicks,
      SUM(metrics_impressions)::text AS impressions,
      SUM(metrics_conversions)::text AS conversions
    FROM public.custom_ad_group_ad
    WHERE segments_date BETWEEN $1::date AND $2::date
    GROUP BY ad_group_ad_ad_id, campaign_id, ad_group_id, campaign_name, ad_group_name
    ORDER BY SUM(metrics_cost_micros) DESC`,
  googleDevices: `
    SELECT segments_device AS id, segments_device AS name,
      SUM(metrics_cost_micros)/1000000.0 AS spend,
      SUM(metrics_clicks)::text AS clicks,
      SUM(metrics_impressions)::text AS impressions,
      SUM(metrics_conversions)::text AS conversions
    FROM public.custom_campaign_device
    WHERE segments_date BETWEEN $1::date AND $2::date
    GROUP BY segments_device ORDER BY SUM(metrics_cost_micros) DESC`,
  metaAds: `
    SELECT ad_id AS id, ad_name AS name, SUM(spend)::text AS spend,
      SUM(clicks)::text AS clicks, SUM(impressions)::text AS impressions,
      SUM((SELECT SUM((a->>'value')::numeric)
        FROM jsonb_array_elements(outbound_clicks) a
        WHERE a->>'action_type' = 'outbound_click'))::text AS outbound,
      SUM((SELECT SUM((a->>'value')::numeric)
        FROM jsonb_array_elements(actions) a
        WHERE a->>'action_type' = 'landing_page_view'))::text AS landing_views
    FROM public.ads_insights
    WHERE date_start BETWEEN $1::date AND $2::date AND ${META_SCOPE_SQL}
    GROUP BY ad_id, ad_name ORDER BY SUM(spend) DESC`,
  metaPlacements: `
    SELECT jsonb_build_array(publisher_platform, platform_position, impression_device)::text AS id,
      COALESCE(publisher_platform, 'Unknown') || ' / ' ||
      COALESCE(platform_position, 'Unknown') || ' / ' ||
      COALESCE(impression_device, 'Unknown') AS name,
      SUM(spend)::text AS spend, SUM(clicks)::text AS clicks,
      SUM(impressions)::text AS impressions
    FROM public.ads_insights_platform_and_device
    WHERE date_start BETWEEN $1::date AND $2::date AND ${META_SCOPE_SQL}
    GROUP BY publisher_platform, platform_position, impression_device
    ORDER BY SUM(spend) DESC`,
};
