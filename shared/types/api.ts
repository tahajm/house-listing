import type { Listing } from './funda-listing'
import type { ListingDetail } from './funda-detail'
import type { Paging } from './funda-shared'

export type ListingCard = Pick<
  Listing,
  | 'Id'
  | 'GlobalId'
  | 'Adres'
  | 'Woonplaats'
  | 'Postcode'
  | 'Koopprijs'
  | 'AantalKamers'
  | 'Woonoppervlakte'
  | 'Foto'
>

export interface ListingsResponse {
  listings: ListingCard[]
  paging: Paging
}

export type ListingDetailApiResponse = Pick<
  ListingDetail,
  | 'Id'
  | 'Adres'
  | 'Woonplaats'
  | 'Postcode'
  | 'Koopprijs'
  | 'AantalKamers'
  | 'AantalSlaapkamers'
  | 'AantalBadkamers'
  | 'Woonoppervlakte'
  | 'Inhoud'
  | 'Bouwjaar'
  | 'Energielabel'
  | 'WGS84_X'
  | 'WGS84_Y'
  | 'HoofdFoto'
  | 'Media'
  | 'Kenmerken'
>
