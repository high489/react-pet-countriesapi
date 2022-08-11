import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICountry } from '../../../models/countries';
import { BASE_URL } from '../../config';

export const fetchCountriesByCodes =
  createAsyncThunk<ICountry[], string[] | undefined, { rejectValue: string }>(
  'countriesByCodes/fetchCountriesByCodes',
  async (codes, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL + 'alpha', {
        params: {codes: codes?.join(',')}
      })
      return response.data
    } catch (e) {
      return rejectWithValue("Failed to load countries by codes")
    }
  }
)