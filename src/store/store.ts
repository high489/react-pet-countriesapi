import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducers/countriesListSlice';
import countryReduser from './reducers/countrySlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;