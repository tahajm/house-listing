import type { PromoLabel } from '~~/shared/types/funda-listing'

const MAX_PROMO_IMAGES = 2

export function getPromoImages(promoLabel: PromoLabel | undefined | null) {
  if (!promoLabel) return []

  const photos = promoLabel.PromotionPhotos.slice(0, MAX_PROMO_IMAGES)

  return photos.map((small) => ({ small }))
}
