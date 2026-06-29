import type { FeedMetadata, Paging, Price } from './funda-shared'

export interface PromoLabel {
  HasPromotionLabel: boolean
  PromotionPhotos: string[]
  PromotionPhotosSecure: string[] | null
  PromotionType: number
  RibbonColor: number
  RibbonText: string | null
  Tagline: string | null
}

export interface ListingProject {
  AantalKamersTotEnMet: number | null
  AantalKamersVan: number | null
  AantalKavels: number | null
  Adres: string | null
  FriendlyUrl: string | null
  GewijzigdDatum: string | null
  GlobalId: number | null
  HoofdFoto: string
  IndIpix: boolean
  IndPDF: boolean
  IndPlattegrond: boolean
  IndTop: boolean
  IndVideo: boolean
  InternalId: string
  MaxWoonoppervlakte: number | null
  MinWoonoppervlakte: number | null
  Naam: string | null
  Omschrijving: string | null
  OpenHuizen: unknown[]
  Plaats: string | null
  Prijs: Price | null
  PrijsGeformatteerd: string | null
  PublicatieDatum: string | null
  Type: number
  Woningtypen: string | null
}

export interface Listing {
  AangebodenSindsTekst: string
  AanmeldDatum: string
  AantalBeschikbaar: number | null
  AantalKamers: number
  AantalKavels: number | null
  Aanvaarding: string
  Adres: string
  Afstand: number
  BronCode: string
  ChildrenObjects: unknown[]
  DatumAanvaarding: string | null
  DatumOndertekeningAkte: string | null
  Foto: string
  FotoLarge: string
  FotoLargest: string
  FotoMedium: string
  FotoSecure: string
  GewijzigdDatum: string | null
  GlobalId: number
  GroupByObjectType: string
  Heeft360GradenFoto: boolean
  HeeftBrochure: boolean
  HeeftOpenhuizenTopper: boolean
  HeeftOverbruggingsgrarantie: boolean
  HeeftPlattegrond: boolean
  HeeftTophuis: boolean
  HeeftVeiling: boolean
  HeeftVideo: boolean
  HuurPrijsTot: number | null
  Huurprijs: number | null
  HuurprijsFormaat: string | null
  Id: string
  InUnitsVanaf: number | null
  IndProjectObjectType: boolean
  IndTransactieMakelaarTonen: boolean | null
  IsSearchable: boolean
  IsVerhuurd: boolean
  IsVerkocht: boolean
  IsVerkochtOfVerhuurd: boolean
  Koopprijs: number | null
  KoopprijsFormaat: string
  KoopprijsTot: number | null
  Land: string | null
  MakelaarId: number
  MakelaarNaam: string
  MobileURL: string
  Note: string | null
  OpenHuis: unknown[]
  Oppervlakte: number
  Perceeloppervlakte: number
  Postcode: string
  Prijs: Price
  PrijsGeformatteerdHtml: string
  PrijsGeformatteerdTextHuur: string
  PrijsGeformatteerdTextKoop: string
  Producten: string[]
  Project: ListingProject
  ProjectNaam: string | null
  PromoLabel: PromoLabel
  PublicatieDatum: string
  PublicatieStatus: number
  SavedDate: string | null
  'Soort-aanbod': string
  SoortAanbod: number
  StartOplevering: string | null
  TimeAgoText: string | null
  TransactieAfmeldDatum: string | null
  TransactieMakelaarId: number | null
  TransactieMakelaarNaam: string | null
  TypeProject: number
  URL: string
  VerkoopStatus: string
  WGS84_X: number
  WGS84_Y: number
  WoonOppervlakteTot: number
  Woonoppervlakte: number
  Woonplaats: string
  ZoekType: number[]
}

export interface FundaListingsResponse {
  AccountStatus: number
  EmailNotConfirmed: boolean
  ValidationFailed: boolean
  ValidationReport: unknown | null
  Website: number
  Metadata: FeedMetadata
  Objects: Listing[]
  Paging: Paging
  TotaalAantalObjecten: number
}
