export const META_CAMPAIGN_IDS: string[];
export const META_ACCOUNT_ID: string;
export const META_SCOPE_SQL: string;
export function metaParameters(from: string, to: string): [string, string, string[], string];
export function dividedMetric(numerator: string | null, denominator: string | null, multiplier?: number): string | null;
export const advertisingQueries: {
  googleAds: string; googleDevices: string; metaAds: string; metaPlacements: string;
};
