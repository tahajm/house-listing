function toListingCard({
  Id,
  Adres,
  Woonplaats,
  Postcode,
  Koopprijs,
  AantalKamers,
  Woonoppervlakte,
  Perceeloppervlakte,
  Foto,
  FotoMedium,
  FotoLarge,
  FotoLargest,
  PromoLabel,
  MakelaarNaam,
}: Listing): ListingCard {
  return {
    Id,
    Adres,
    Woonplaats,
    Postcode,
    Koopprijs,
    AantalKamers,
    Woonoppervlakte,
    Perceeloppervlakte,
    Foto,
    FotoMedium,
    FotoLarge,
    FotoLargest,
    PromoLabel,
    MakelaarNaam,
  }
}

export function transformListingsResponse(data: FundaListingsResponse): ListingsResponse {
  return {
    listings: data.Objects.map(toListingCard),
    paging: data.Paging,
    total: data.TotaalAantalObjecten,
  }
}

export function transformDetailResponse(detail: ListingDetail): ListingDetailResponse {
  return {
    Id: detail.Id,
    Adres: detail.Adres,
    Plaats: detail.Plaats,
    Postcode: detail.Postcode,
    Koopprijs: detail.Koopprijs,
    AantalKamers: detail.AantalKamers,
    AantalBadkamers: detail.AantalBadkamers,
    WoonOppervlakte: detail.WoonOppervlakte,
    PerceelOppervlakte: detail.PerceelOppervlakte,
    Energielabel: detail.Energielabel,
    VolledigeOmschrijving: detail.VolledigeOmschrijving,
    WGS84_X: detail.WGS84_X,
    WGS84_Y: detail.WGS84_Y,
    Media: detail.Media,
  }
}
