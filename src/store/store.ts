import { configureStore } from '@reduxjs/toolkit';
import allCountriesReducer from './reducers/allCountries';
import countryDetailsReducer from './reducers/countryDetails';
import themeReducer from './reducers/theme';
import controlsReducer from './reducers/controls';

export const store = configureStore({
  reducer: {
    allCountries: allCountriesReducer,
    countryDetails: countryDetailsReducer,
    theme: themeReducer,
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;