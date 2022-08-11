import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICountry } from '../../../models/countries';
import { BASE_URL } from '../../config';

export const fetchCountryByName = 
  createAsyncThunk<ICountry, string | undefined, {rejectValue: string}>(
  'country/fetchCountryByName',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}name/${name}`)
      return response.data[0]
    } catch (e) {
      return rejectWithValue("Failed to load searched country data")
    }
  }
)