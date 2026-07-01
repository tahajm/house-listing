export function generateGoogleMapUrl(
  lat: number | string,
  lng: number | string,
) {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
}

export function secureImageUrl(url?: string) {
  if (!url) return '';
  return url.replace('http://', 'https://');
}

export function getPhotoUrl(media: Media, size: PhotoSize) {
  const url = media.MediaItems.find((i) => i.Category === size)?.Url;
  return secureImageUrl(url);
}
