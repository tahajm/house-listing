import { describe, expect, it } from 'vitest'

import { getPromoImages } from '~/utils/promoImages'
import type { PromoLabel } from '~~/shared/types/funda-listing'

function makePromoLabel(photos: string[]): PromoLabel {
  return {
    PromotionPhotos: photos,
  } as PromoLabel
}

describe('getPromoImages', () => {
  it('returns empty array when promoLabel is missing', () => {
    expect(getPromoImages(null)).toEqual([])
  })

  it('secures URLs and caps at 2 photos', () => {
    const photos = [
      'http://cdn.example.com/a.jpg',
      'http://cdn.example.com/b.jpg',
      'http://cdn.example.com/c.jpg',
    ]
    expect(getPromoImages(makePromoLabel(photos))).toEqual([
      'https://cdn.example.com/a.jpg',
      'https://cdn.example.com/b.jpg',
    ])
  })
})
