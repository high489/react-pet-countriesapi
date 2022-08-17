import { configureStore } from '@reduxjs/toolkit';
import allCountriesReducer from './reducers/allCountries';
import countryDetailsReducer from './reducers/countryDetails';

export const store = configureStore({
  reducer: {
    allCountries: allCountriesReducer,
    countryDetails: countryDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;