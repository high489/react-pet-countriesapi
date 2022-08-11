import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountriesState } from '../../../models/countries';
import { isError } from '../isError';
import { fetchCountriesByCodes } from './actionCreators';

const initialState: ICountriesState = {
  data: [],
  loading: false,
  error: null,
}

const countriesByCodesSlice = createSlice({
  name: 'countriesByCodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesByCodes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCountriesByCodes.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default countriesByCodesSlice.reducer;