import type { ListingDetail } from './funda-detail'
import type { Listing } from './funda-listing'
import type { Paging } from './funda-shared'

export type ListingCard = Pick<
  Listing,
  | 'Id'
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
  | 'PromoLabel'
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
  | 'Plaats'
  | 'Postcode'
  | 'Koopprijs'
  | 'AantalKamers'
  | 'AantalBadkamers'
  | 'WoonOppervlakte'
  | 'PerceelOppervlakte'
  | 'Energielabel'
  | 'VolledigeOmschrijving'
  | 'WGS84_X'
  | 'WGS84_Y'
  | 'Media'
>
