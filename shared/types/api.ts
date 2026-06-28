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
  | 'Perceeloppervlakte'
  | 'Foto'
  | 'FotoMedium'
  | 'FotoLarge'
  | 'FotoLargest'
>

export interface ListingsResponse {
  listings: ListingCard[]
  paging: Paging
  total: number
}

export type ListingDetailResponse = Pick<
  ListingDetail,
  | 'Id'
  | 'Adres'
  | 'Woonplaats'
  | 'Postcode'
  | 'Koopprijs'
  | 'AantalKamers'
  | 'AantalSlaapkamers'
  | 'AantalBadkamers'
  | 'WoonOppervlakte'
  | 'PerceelOppervlakte'
  | 'Inhoud'
  | 'Bouwjaar'
  | 'Energielabel'
  | 'WGS84_X'
  | 'WGS84_Y'
  | 'HoofdFoto'
  | 'Media'
  | 'Kenmerken'
>
