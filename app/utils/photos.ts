import { secureImageUrl } from '~/utils/configs';
import {
  type Media,
  MediaKind,
  PhotoSize,
  type Thumbnail,
} from '~~/shared/types/shared';

const PHOTO_LIMIT = 5;

function getUrl(media: Media, size: PhotoSize) {
  const url = media.MediaItems.find((i) => i.Category === size)?.Url;
  return secureImageUrl(url);
}

function toPhoto(media: Media): Required<Thumbnail> {
  return {
    small: getUrl(media, PhotoSize.Small),
    medium: getUrl(media, PhotoSize.Medium),
    large: getUrl(media, PhotoSize.Large),
    largest: getUrl(media, PhotoSize.Largest),
  };
}

export function extractPhotos(media: Media[] | undefined) {
  const firstMediaPhotos = (media ?? [])
    .filter((m) => m.Categorie === MediaKind.Photos)
    .slice(0, PHOTO_LIMIT);

  const [first, ...rest] = firstMediaPhotos;

  if (!first) return { heroImage: null, thumbnailImages: [] };

  const heroImage = toPhoto(first);
  const thumbnailImages = rest.map((m) => getUrl(m, PhotoSize.Medium));

  return { heroImage, thumbnailImages };
}
