export interface ICountry {
  alpha2Code:     string;
  alpha3Code:     string;
  altSpellings?:  string[];
  area?:          number;
  borders?:       string[];
  callingCodes:   string[];
  capital?:       string;
  cioc?:          string;
  currencies?:    ICurrency[];
  demonym:        string;
  flag:           string;
  flags:          IFlags;
  gini?:          number;
  independent:    boolean;
  languages:      ILanguage[];
  latlng?:        number[];
  name:           string;
  nativeName:     string;
  numericCode:    string;
  population:     number;
  region:         ERegion;
  regionalBlocs?: IRegionalBloc[];
  subregion:      string;
  timezones:      string[];
  topLevelDomain: string[];
  translations:   ITranslations;
 }
 
 export interface ICurrency {
  code:   string;
  name:   string;
  symbol: string;
 }
 
 export interface IFlags {
  png: string;
  svg: string;
 }
 
 export interface ILanguage {
  iso639_1?:   string;
  iso639_2:    string;
  name:        string;
  nativeName?: string;
 }
 
 export enum ERegion {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  AntarcticOcean = "Antarctic Ocean",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar",
 }
 
 export interface IRegionalBloc {
  acronym:        EAcronym;
  name:           EName;
  otherAcronyms?: EOtherAcronym[];
  otherNames?:    EOtherName[];
 }
 
 export enum EAcronym {
  Al = "AL",
  Asean = "ASEAN",
  Au = "AU",
  Cais = "CAIS",
  Caricom = "CARICOM",
  Cefta = "CEFTA",
  Eeu = "EEU",
  Efta = "EFTA",
  Eu = "EU",
  Nafta = "NAFTA",
  Pa = "PA",
  Saarc = "SAARC",
  Usan = "USAN",
 }
 
 export enum EName {
  AfricanUnion = "African Union",
  ArabLeague = "Arab League",
  AssociationOfSoutheastAsianNations = "Association of Southeast Asian Nations",
  CaribbeanCommunity = "Caribbean Community",
  CentralAmericanIntegrationSystem = "Central American Integration System",
  CentralEuropeanFreeTradeAgreement = "Central European Free Trade Agreement",
  EurasianEconomicUnion = "Eurasian Economic Union",
  EuropeanFreeTradeAssociation = "European Free Trade Association",
  EuropeanUnion = "European Union",
  NorthAmericanFreeTradeAgreement = "North American Free Trade Agreement",
  PacificAlliance = "Pacific Alliance",
  SouthAsianAssociationForRegionalCooperation = "South Asian Association for Regional Cooperation",
  UnionOfSouthAmericanNations = "Union of South American Nations",
 }
 
 export enum EOtherAcronym {
  Eaeu = "EAEU",
  Sica = "SICA",
  Unasul = "UNASUL",
  Unasur = "UNASUR",
  Uzan = "UZAN",
 }
 
 export enum EOtherName {
  AccordDeLibre??changeNordAm??ricain = "Accord de Libre-??change Nord-Am??ricain",
  AlianzaDelPac??fico = "Alianza del Pac??fico",
  CaribischeGemeenschap = "Caribische Gemeenschap",
  Communaut??Carib??enne = "Communaut?? Carib??enne",
  ComunidadDelCaribe = "Comunidad del Caribe",
  J??miAtAdDuwalAlArab??yah = "J??mi??at ad-Duwal al-??Arab??yah",
  LeagueOfArabStates = "League of Arab States",
  SistemaDeLaIntegraci??nCentroamericana = "Sistema de la Integraci??n Centroamericana,",
  SouthAmericanUnion = "South American Union",
  TratadoDeLibreComercioDeAm??ricaDelNorte = "Tratado de Libre Comercio de Am??rica del Norte",
  UmojaWaAfrika = "Umoja wa Afrika",
  UnieVanZuidAmerikaanseNaties = "Unie van Zuid-Amerikaanse Naties",
  UnionAfricaine = "Union africaine",
  Uni??oAfricana = "Uni??o Africana",
  Uni??oDeNa????esSulAmericanas = "Uni??o de Na????es Sul-Americanas",
  Uni??nAfricana = "Uni??n Africana",
  Uni??nDeNacionesSuramericanas = "Uni??n de Naciones Suramericanas",
  ?????????????????????????????? = "?????????????? ????????????????",
  ?????????????????????????????????? = "?????????? ?????????? ??????????????",
 }
 
 export interface ITranslations {
  br:  string;
  de:  string;
  es:  string;
  fa?: string;
  fr:  string;
  hr:  string;
  hu:  string;
  it:  string;
  ja:  string;
  nl:  string;
  pt:  string;
 }

export interface ICountriesState {
  data: ICountry[];
  loading: boolean;
  error: string | null;
}

export interface ICountryState {
  country: ICountry;
  isCountryLoading: boolean;
  countryError: string | null | undefined;
  neighbours: ICountry[];
  areNeighboursLoading: boolean;
  neighboursError: string | null | undefined;
}
 
 interface ICountryInfoItem {
  title: string;
  description?: string;
 }

 export interface ICountryInfo {
  img: string;
  name: string;
  info: ICountryInfoItem[];
 }