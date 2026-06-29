export function generatGoogleMapUrl(lat: number | string, lng: number | string) {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`
}
