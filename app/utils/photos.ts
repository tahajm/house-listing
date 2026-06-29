import { type Media, MediaKind, PhotoSize, type Thumbnail } from '~~/shared/types/funda-shared'

const PHOTO_LIMIT = 5

function getUrl(media: Media, size: PhotoSize) {
  return media.MediaItems.find((i) => i.Category === size)!.Url
}

function toPhoto(media: Media): Required<Thumbnail> {
  return {
    small: getUrl(media, PhotoSize.Small),
    medium: getUrl(media, PhotoSize.Medium),
    large: getUrl(media, PhotoSize.Large),
    largest: getUrl(media, PhotoSize.Largest),
  }
}

export function extractPhotos(media: Media[] | undefined) {
  const all = (media ?? [])
    .filter((m) => m.Categorie === MediaKind.Photos)
    .slice(0, PHOTO_LIMIT)
    .map(toPhoto)

  const [heroImage, ...thumbnailImages] = all

  return { heroImage, thumbnailImages }
}
