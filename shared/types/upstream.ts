import type {
  FeedMetadata,
  KenmerkCategorie,
  Media,
  Paging,
  Price,
} from './shared';

export interface PromoLabel {
  HasPromotionLabel: boolean;
  PromotionPhotos: string[];
  PromotionPhotosSecure: string[] | null;
  PromotionType: number;
  RibbonColor: number;
  RibbonText: string | null;
  Tagline: string | null;
}

export interface ListingProject {
  AantalKamersTotEnMet: number | null;
  AantalKamersVan: number | null;
  AantalKavels: number | null;
  Adres: string | null;
  FriendlyUrl: string | null;
  GewijzigdDatum: string | null;
  GlobalId: number | null;
  HoofdFoto: string;
  IndIpix: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVideo: boolean;
  InternalId: string;
  MaxWoonoppervlakte: number | null;
  MinWoonoppervlakte: number | null;
  Naam: string | null;
  Omschrijving: string | null;
  OpenHuizen: unknown[];
  Plaats: string | null;
  Prijs: Price | null;
  PrijsGeformatteerd: string | null;
  PublicatieDatum: string | null;
  Type: number;
  Woningtypen: string | null;
}

export interface RawListing {
  AangebodenSindsTekst: string;
  AanmeldDatum: string;
  AantalBeschikbaar: number | null;
  AantalKamers: number | null;
  AantalKavels: number | null;
  Aanvaarding: string;
  Adres: string;
  Afstand: number;
  BronCode: string;
  ChildrenObjects: unknown[];
  DatumAanvaarding: string | null;
  DatumOndertekeningAkte: string | null;
  Foto: string;
  FotoLarge: string;
  FotoLargest: string;
  FotoMedium: string;
  FotoSecure: string;
  GewijzigdDatum: string | null;
  GlobalId: number;
  GroupByObjectType: string;
  Heeft360GradenFoto: boolean;
  HeeftBrochure: boolean;
  HeeftOpenhuizenTopper: boolean;
  HeeftOverbruggingsgrarantie: boolean;
  HeeftPlattegrond: boolean;
  HeeftTophuis: boolean;
  HeeftVeiling: boolean;
  HeeftVideo: boolean;
  HuurPrijsTot: number | null;
  Huurprijs: number | null;
  HuurprijsFormaat: string | null;
  Id: string;
  InUnitsVanaf: number | null;
  IndProjectObjectType: boolean;
  IndTransactieMakelaarTonen: boolean | null;
  IsSearchable: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  IsVerkochtOfVerhuurd: boolean;
  Koopprijs: number | null;
  KoopprijsFormaat: string;
  KoopprijsTot: number | null;
  Land: string | null;
  MakelaarId: number;
  MakelaarNaam: string;
  MobileURL: string;
  Note: string | null;
  OpenHuis: unknown[];
  Oppervlakte: number;
  Perceeloppervlakte: number | null;
  Postcode: string;
  Prijs: Price;
  PrijsGeformatteerdHtml: string;
  PrijsGeformatteerdTextHuur: string;
  PrijsGeformatteerdTextKoop: string;
  Producten: string[];
  Project: ListingProject;
  ProjectNaam: string | null;
  PromoLabel: PromoLabel;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SavedDate: string | null;
  'Soort-aanbod': string;
  SoortAanbod: number;
  StartOplevering: string | null;
  TimeAgoText: string | null;
  TransactieAfmeldDatum: string | null;
  TransactieMakelaarId: number | null;
  TransactieMakelaarNaam: string | null;
  TypeProject: number;
  URL: string;
  VerkoopStatus: string;
  WGS84_X: number;
  WGS84_Y: number;
  WoonOppervlakteTot: number;
  Woonoppervlakte: number | null;
  Woonplaats: string;
  ZoekType: number[];
}

export interface RawListingsResponse {
  AccountStatus: number;
  EmailNotConfirmed: boolean;
  ValidationFailed: boolean;
  ValidationReport: unknown | null;
  Website: number;
  Metadata: FeedMetadata;
  Objects: RawListing[];
  Paging: Paging;
  TotaalAantalObjecten: number;
}

export interface Energielabel {
  Definitief: boolean;
  Index: number | null;
  Label: string | null;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

export interface BezichtigingOptie {
  Naam: string;
  Waarde: string;
}

export interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number;
  RibbonColor: number;
  RibbonText: string | null;
  Tagline: string | null;
}

export interface RawListingDetail {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number | null;
  AantalKamers: number | null;
  AantalSlaapkamers: number | null;
  AantalWoonlagen: string;
  Aanvaarding: string;
  Adres: string;
  AfgekochtDatum: string | null;
  BalkonDakterras: string | null;
  BedrijfsruimteCombinatieObject: unknown | null;
  BezichtingDagdelen: BezichtigingOptie[];
  BezichtingDagen: BezichtigingOptie[];
  BijdrageVVE: number | null;
  Bijzonderheden: string | null;
  Bouwjaar: string;
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: string | null;
  ContactpersoonTelefoon: string | null;
  Cv: string | null;
  DatumOndertekeningAkte: string | null;
  Deeplink: string | null;
  DetailInfo: DetailInfo;
  EigendomsSituatie: string | null;
  Energielabel: Energielabel;
  ErfpachtBedrag: number | null;
  Garage: string | null;
  GarageIsolatie: string | null;
  GarageVoorzieningen: string | null;
  GelegenOp: string | null;
  GewijzigdDatum: string;
  HoofdFoto: string;
  HoofdFotoSecure: string;
  HoofdTuinType: string | null;
  Id: number;
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number;
  InternalId: string;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string | null;
  Kenmerken: KenmerkCategorie[];
  KenmerkenKort: KenmerkCategorie;
  KenmerkenTitel: string | null;
  Ligging: string | null;
  MLIUrl: string;
  Makelaar: string;
  MakelaarId: number;
  MakelaarTelefoon: string | null;
  MedeAanbieders: unknown[];
  Media: Media[];
  Koopprijs: number | null;
  Postcode: string;
  VolledigeOmschrijving: string | null;
  WGS84_X: number;
  WGS84_Y: number;
  PerceelOppervlakte: number | null;
  WoonOppervlakte: number | null;
  Plaats: string;
}
