import { secureImageUrl } from '~/utils/configs';
import type { PromoLabel } from '~~/shared/types/upstream';

const MAX_PROMO_IMAGES = 2;

export function getPromoImages(promoLabel: PromoLabel | undefined | null) {
  if (!promoLabel) return [];

  const photos = promoLabel.PromotionPhotos.slice(0, MAX_PROMO_IMAGES).map(
    (url) => secureImageUrl(url),
  );

  return photos;
}
