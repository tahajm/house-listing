const MAX_GALLARY_PHOTO = 5;

export function extractPhotos(media: Media[] | undefined) {
  if (!media) {
    return { photos: [], headPhoto: undefined, extraGalleryPhotos: [] };
  }

  const photos = media
    .filter((m) => m.Categorie === MediaKind.Photos)
    .map((m) => ({
      medium: getPhotoUrl(m, PhotoSize.Medium),
      large: getPhotoUrl(m, PhotoSize.Large),
    }));

  return {
    photos,
    headPhoto: photos[0],
    extraGalleryPhotos: photos.slice(1, MAX_GALLARY_PHOTO),
  };
}
