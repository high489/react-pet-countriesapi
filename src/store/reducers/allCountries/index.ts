import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountriesState } from '../../../models/countries';
import { isError } from '../isError';
import { fetchAllCountries } from './action-creators';

const initialState: ICountriesState = {
  data: [],
  loading: false,
  error: null,
}

const allCountriesSlice = createSlice({
  name: 'allCountries',
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

export default allCountriesSlice.reducer;