const MAX_GALLARY_PHOTO = 5;

export function useMedia(media: Media[] | undefined) {
  const photos = computed(() => {
    if (!media) return [];

    return media
      .filter((m) => m.Categorie === MediaKind.Photos)
      .map((m) => {
        return {
          medium: getPhotoUrl(m, PhotoSize.Medium),
          large: getPhotoUrl(m, PhotoSize.Large),
        };
      });
  });

  const headPhoto = computed(() => photos.value[0]);

  const extraGalleryPhotos = computed(() =>
    photos.value.slice(1, MAX_GALLARY_PHOTO),
  );

  return {
    photos,
    headPhoto,
    extraGalleryPhotos,
  };
}
