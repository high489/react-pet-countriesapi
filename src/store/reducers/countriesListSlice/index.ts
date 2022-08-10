import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry } from '../../../models/countries';
import { isError } from '../isError';
import { fetchAllCountries } from './actionCreators';

export interface CountriesListState {
  data: ICountry[];
  loading: boolean;
  error: string | null;
}

const initialState: CountriesListState = {
  data: [],
  loading: false,
  error: null,
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default countriesSlice.reducer;