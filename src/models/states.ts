import { ICountry } from "./rest_countries_v31";

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

export interface ICountryInfo {
  img: string;
  name: string;
  info: ICountryInfoItem[];
}

interface ICountryInfoItem {
  title: string;
  description?: string;
}