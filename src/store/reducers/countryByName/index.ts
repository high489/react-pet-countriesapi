import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry } from '../../../models/countries';
import { isError } from '../isError';
import { fetchCountryByName } from './actionCreators';

interface CountryState {
  data: ICountry;
  loading: boolean;
  error: string | null;
}

const initialState: CountryState = {
  data: {} as ICountry,
  loading: false,
  error: null,
}

const countryByNameSlice = createSlice({
  name: 'countryByName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCountryByName.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchCountryByName.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    .addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default countryByNameSlice.reducer;