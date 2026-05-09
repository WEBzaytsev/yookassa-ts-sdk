import assert from 'node:assert/strict'
import { serializeYooKassaListParams } from '../client/queryParams'

const q = serializeYooKassaListParams({
    created_at: { gte: '2018-07-18T10:51:18.139Z' },
    limit: 10,
})
assert.match(q, /(^|&)created_at\.gte=/)
assert.doesNotMatch(q, /created_at%5Bgte%5D/)
assert.match(q, /(^|&)limit=10(?:&|$)/)

const q2 = serializeYooKassaListParams({
    payout_destination: { type: 'sbp' },
    succeeded_at: { gte: '2020-01-01T00:00:00.000Z' },
})
assert.match(q2, /(^|&)payout_destination\.type=sbp(&|$)/)
assert.match(q2, /(^|&)succeeded_at\.gte=/)

const q3 = serializeYooKassaListParams({
    metadata: { operation_id: 'e2ab2e1c-776d-4376-aba8-d2099243d1f6' },
    limit: 20,
})
assert.match(q3, /metadata(%5B|\[)operation_id(%5D|\])=e2ab2e1c-776d-4376-aba8-d2099243d1f6/)
assert.doesNotMatch(q3, /metadata\.operation_id=/)

console.log('query-params smoke ok')
