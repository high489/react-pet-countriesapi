import { IControlsState } from '../../../models';
import { RootState } from '../../store';

export const selectAllCountries = (state: RootState) => state.allCountries;
export const selectFilteredCountries = (state: RootState, {search = '', region = ''}: IControlsState) => {
  const regionValue = region?.value || '' 
  return { 
    data: state.allCountries.data.filter(country => (
        country.name.common.toLowerCase().includes(search.toLowerCase()) && country.region.includes(regionValue)
      )
    ),
    loading: state.allCountries.loading,
    error: state.allCountries.error,
  }
}