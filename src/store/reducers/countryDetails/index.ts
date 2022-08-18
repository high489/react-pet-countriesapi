import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountry, ICountryState } from '../../../models/countries';
import { fetchCountryByName, fetchNeighboursByCodes } from './action-creators';

const initialState: ICountryState = {
  country: {} as ICountry,
  isCountryLoading: true,
  countryError: null,
  neighbours: [],
  areNeighboursLoading: false,
  neighboursError: null,
}

const countryDetailsSlice = createSlice({
  name: 'countryDetails',
  initialState,
  reducers: {
    resetToInitialState: state => state = initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryByName.pending, (state) => {
        state.isCountryLoading = true
        state.countryError = null
      })
      .addCase(fetchCountryByName.fulfilled, (state, action) => {
        state.country = action.payload
        state.isCountryLoading = false
      })
      .addCase(fetchCountryByName.rejected, (state, action: PayloadAction<string | null | undefined>) => {
        state.isCountryLoading = false
        state.countryError = action.payload
      })
      .addCase(fetchNeighboursByCodes.pending, (state) => {
        state.areNeighboursLoading = true
        state.neighboursError = null
      })
      .addCase(fetchNeighboursByCodes.fulfilled, (state, action) => {
        state.neighbours = action.payload
        state.areNeighboursLoading = false
      })
      .addCase(fetchNeighboursByCodes.rejected, (state, action: PayloadAction<string | null | undefined>) => {
        state.areNeighboursLoading = false
        state.neighboursError = action.payload
      })
  },
})

export const { resetToInitialState } = countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;