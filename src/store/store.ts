import { configureStore } from '@reduxjs/toolkit';
import allCountriesReducer from './reducers/allCountries';
import countriesByCodesReducer from './reducers/countriesByCodes';
import countryByNameReduser from './reducers/countryByName';

export const store = configureStore({
  reducer: {
    allCountries: allCountriesReducer,
    countriesByCodes: countriesByCodesReducer,
    country: countryByNameReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;