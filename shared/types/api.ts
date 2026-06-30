import type { Paging } from './shared';
import type { RawListing, RawListingDetail } from './upstream';

export type ListingCard = Pick<
  RawListing,
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
  | 'MakelaarNaam'
>;

export interface ListingsResponse {
  listings: ListingCard[];
  paging: Paging;
  total: number;
}

export type ListingDetail = Pick<
  RawListingDetail,
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
>;
