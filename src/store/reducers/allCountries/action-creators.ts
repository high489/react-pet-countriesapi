import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICountry } from '../../../models/countries';
import { BASE_URL } from '../../config';

export const fetchAllCountries = 
  createAsyncThunk<ICountry[], undefined, { rejectValue: string }>(
  'allCountries/fetchAllCountries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL + 'all', {
        params: {fields: 'name,capital,flags,population,region'}
      })
      return response.data
    } catch (e) {
      return rejectWithValue("Failed to load countries data")
    }
  }
)