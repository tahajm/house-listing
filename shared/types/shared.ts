export interface Price {
  GeenExtraKosten: boolean;
  HuurAbbreviation: string;
  Huurprijs: number | null;
  HuurprijsOpAanvraag: string;
  HuurprijsTot: number | null;
  KoopAbbreviation: string;
  Koopprijs: number | null;
  KoopprijsOpAanvraag: string;
  KoopprijsTot: number | null;
  OriginelePrijs: number | null;
  VeilingText: string;
}

export enum PhotoSize {
  Small = 1,
  Medium = 4,
  Large = 6,
  Largest = 7,
}

export enum MediaKind {
  Photos = 1,
  Brochure = 3,
  VirtualTour = 4,
  Floorplans = 5,
}

export interface MediaItem {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure: string;
  Width: number;
}

export interface Media {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: MediaItem[];
  Metadata: null;
  Omschrijving: string | null;
  RegistratieVerplicht: boolean;
  Soort: number;
}

export type Thumbnail = {
  small: string;
  medium?: string;
  large?: string;
  largest?: string;
};

export interface Paging {
  AantalPaginas: number;
  HuidigePagina: number;
  VolgendeUrl: string | null;
  VorigeUrl: string | null;
}

export interface FeedMetadata {
  ObjectType: string;
  Omschrijving: string;
  Titel: string;
}

export interface Kenmerk {
  Naam: string;
  NaamCss: string | null;
  Waarde: string;
  WaardeCss: string | null;
}

export interface KenmerkCategorie {
  Ad: string | null;
  Kenmerken: Kenmerk[];
  LokNummer: number;
  SubKenmerk: KenmerkCategorie | null;
  Titel: string | null;
}
