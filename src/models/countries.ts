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
  AccordDeLibreÉchangeNordAméricain = "Accord de Libre-échange Nord-Américain",
  AlianzaDelPacífico = "Alianza del Pacífico",
  CaribischeGemeenschap = "Caribische Gemeenschap",
  CommunautéCaribéenne = "Communauté Caribéenne",
  ComunidadDelCaribe = "Comunidad del Caribe",
  JāmiAtAdDuwalAlArabīyah = "Jāmiʻat ad-Duwal al-ʻArabīyah",
  LeagueOfArabStates = "League of Arab States",
  SistemaDeLaIntegraciónCentroamericana = "Sistema de la Integración Centroamericana,",
  SouthAmericanUnion = "South American Union",
  TratadoDeLibreComercioDeAméricaDelNorte = "Tratado de Libre Comercio de América del Norte",
  UmojaWaAfrika = "Umoja wa Afrika",
  UnieVanZuidAmerikaanseNaties = "Unie van Zuid-Amerikaanse Naties",
  UnionAfricaine = "Union africaine",
  UniãoAfricana = "União Africana",
  UniãoDeNaçõesSulAmericanas = "União de Nações Sul-Americanas",
  UniónAfricana = "Unión Africana",
  UniónDeNacionesSuramericanas = "Unión de Naciones Suramericanas",
  الاتحادالأفريقي = "الاتحاد الأفريقي",
  جامعةالدولالعربية = "جامعة الدول العربية",
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
 
 interface ICountryInfoItem {
  title: string;
  description?: string;
 }

 export interface ICountryInfo {
  img: string;
  name: string;
  info: ICountryInfoItem[];
 }

