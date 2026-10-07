export function parsePeriod(start, end, now = new Date()) {
  const last = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1));
  const first = new Date(last);
  first.setUTCDate(first.getUTCDate() - 29);
  const from = start ?? first.toISOString().slice(0, 10);
  const to = end ?? last.toISOString().slice(0, 10);
  for (const value of [from, to]) {
    const parsed = new Date(`${value}T00:00:00Z`);
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)
      || !Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
      throw new Error('Use valid dates in YYYY-MM-DD format.');
    }
  }
  if (from > to) throw new Error('Start date must not be after end date.');
  if (from < '2025-01-01' || to > last.toISOString().slice(0, 10)) {
    throw new Error('Choose complete days between 1 January 2025 and yesterday.');
  }
  return { from, to };
}
