import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PriceTag from '../../app/components/PriceTag.vue'

describe('PriceTag', () => {
  it('formats the price in Dutch locale with the k.k. suffix', async () => {
    const wrapper = await mountSuspended(PriceTag, { props: { price: 1250000 } })
    expect(wrapper.text()).toBe('€ 1.250.000 k.k.')
  })

  it('shows "Price on request" when price is null', async () => {
    const wrapper = await mountSuspended(PriceTag, { props: { price: null } })
    expect(wrapper.text()).toBe('Price on request')
    expect(wrapper.text()).not.toContain('€')
  })
})
