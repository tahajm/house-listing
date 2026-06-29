import type { KenmerkCategorie, Media } from './funda-shared'

export interface Energielabel {
  Definitief: boolean
  Index: number | null
  Label: string
  NietBeschikbaar: boolean
  NietVerplicht: boolean
}

export interface BezichtigingOptie {
  Naam: string
  Waarde: string
}

export interface DetailInfo {
  HasPromotionLabel: boolean
  PromotionLabelType: number
  RibbonColor: number
  RibbonText: string | null
  Tagline: string | null
}

export interface ListingDetail {
  AangebodenSinds: string
  AangebodenSindsTekst: string
  AantalBadkamers: number
  AantalKamers: number
  AantalSlaapkamers: number | null
  AantalWoonlagen: string
  Aanvaarding: string
  Adres: string
  AfgekochtDatum: string | null
  BalkonDakterras: string | null
  BedrijfsruimteCombinatieObject: unknown | null
  BezichtingDagdelen: BezichtigingOptie[]
  BezichtingDagen: BezichtigingOptie[]
  BijdrageVVE: number | null
  Bijzonderheden: string | null
  Bouwjaar: string
  Bouwvorm: string
  BronCode: string
  ContactpersoonEmail: string | null
  ContactpersoonTelefoon: string | null
  Cv: string | null
  DatumOndertekeningAkte: string | null
  Deeplink: string | null
  DetailInfo: DetailInfo
  EigendomsSituatie: string | null
  Energielabel: Energielabel
  ErfpachtBedrag: number | null
  Garage: string | null
  GarageIsolatie: string | null
  GarageVoorzieningen: string | null
  GelegenOp: string | null
  GewijzigdDatum: string
  HoofdFoto: string
  HoofdFotoSecure: string
  HoofdTuinType: string | null
  Id: number
  IndBasisPlaatsing: boolean
  IndFotos: boolean
  IndIpix: boolean
  IndOpenhuizenTopper: boolean
  IndPDF: boolean
  IndPlattegrond: boolean
  IndTop: boolean
  IndVeilingProduct: boolean
  IndVideo: boolean
  Inhoud: number
  InternalId: string
  IsIngetrokken: boolean
  IsVerhuurd: boolean
  IsVerkocht: boolean
  Isolatie: string | null
  Kenmerken: KenmerkCategorie[]
  KenmerkenKort: KenmerkCategorie
  KenmerkenTitel: string | null
  Ligging: string | null
  MLIUrl: string
  Makelaar: string
  MakelaarId: number
  MakelaarTelefoon: string | null
  MedeAanbieders: unknown[]
  Media: Media[]
  Koopprijs: number | null
  Postcode: string
  VolledigeOmschrijving: string | null
  WGS84_X: number
  WGS84_Y: number
  PerceelOppervlakte: number
  WoonOppervlakte: number
  Plaats: string
}
