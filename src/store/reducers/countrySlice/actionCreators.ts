import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICountry } from '../../../models/countries';
import { BASE_URL } from '../../config';

export const fetchCountryByName = 
  createAsyncThunk<ICountry, string, {rejectValue: string}>(
  'countries/searchByName',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}name/${name}`)
      return response.data
    } catch (e) {
      return rejectWithValue("Failed to load searched country data")
    }
  }
)