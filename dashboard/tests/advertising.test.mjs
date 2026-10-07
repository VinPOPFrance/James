import test from 'node:test';
import assert from 'node:assert/strict';
import { META_CAMPAIGN_IDS, metaParameters, dividedMetric, advertisingQueries, META_SCOPE_SQL } from '../lib/advertising.mjs';

test('Meta queries restrict account and confirmed campaign IDs, not names', () => {
  assert.deepEqual(metaParameters('2026-09-27', '2026-10-06'),
    ['2026-09-27', '2026-10-06', ['52533374224650'], '141739812']);
  assert.equal(META_CAMPAIGN_IDS.length, 1);
  for (const query of [advertisingQueries.metaAds, advertisingQueries.metaPlacements]) {
    assert.ok(query.includes(META_SCOPE_SQL));
    assert.ok(query.includes('date_start BETWEEN $1::date AND $2::date'));
  }
});
test('weighted ratios retain zero numerator but reject missing or zero denominator', () => {
  assert.equal(dividedMetric('10', '1000', 100), '1');
  assert.equal(dividedMetric('50', '20'), '2.5');
  assert.equal(dividedMetric('0', '20'), '0');
  assert.equal(dividedMetric('20', '0'), null);
  assert.equal(dividedMetric(null, '20'), null);
  assert.equal(dividedMetric('20', null), null);
  assert.equal(dividedMetric('bad', '20'), null);
});
test('Meta action queries avoid multiplying base rows or combining overlapping actions', () => {
  assert.ok(advertisingQueries.metaAds.includes("a->>'action_type' = 'landing_page_view'"));
  assert.ok(!advertisingQueries.metaAds.includes('omni_landing_page_view'));
  assert.ok(!advertisingQueries.metaAds.includes('CROSS JOIN'));
});
