import test from 'node:test';
import assert from 'node:assert/strict';
import { parsePeriod } from '../lib/period.mjs';

const now = new Date('2026-10-07T11:00:00Z');
test('defaults to last 30 complete days', () => {
  assert.deepEqual(parsePeriod(undefined, undefined, now), { from: '2026-09-07', to: '2026-10-06' });
});
test('preserves valid calendar dates', () => {
  assert.deepEqual(parsePeriod('2025-01-01', '2026-10-06', now), { from: '2025-01-01', to: '2026-10-06' });
});
test('rejects invalid dates and unsafe ranges', () => {
  for (const [from, to] of [
    ['2026-02-30', '2026-03-01'], ['bad', '2026-10-06'],
    ['2026-10-06', '2026-10-01'], ['2024-12-31', '2026-10-06'],
    ['2026-10-01', '2026-10-07'],
  ]) assert.throws(() => parsePeriod(from, to, now));
});
