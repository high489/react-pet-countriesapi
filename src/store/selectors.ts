import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectAllCountries = (state: RootState) => state.allCountries;

export const allCoutriesSelector = createSelector(
  selectAllCountries,
  (allCountries) => {
    return allCountries
  }
) 