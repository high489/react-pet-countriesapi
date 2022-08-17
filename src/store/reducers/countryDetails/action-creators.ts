import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICountry } from '../../../models/countries';
import { BASE_URL } from '../../config';

export const fetchCountryByName = 
  createAsyncThunk<ICountry, string | undefined, {rejectValue: string}>(
  'countryDetails/fetchCountryByName',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}name/${name}`)
      return response.data[0]
    } catch (e) {
      return rejectWithValue("Failed to load searched country data")
    }
  }
)

export const fetchNeighboursByCodes =
  createAsyncThunk<ICountry[], string[] | undefined, { rejectValue: string }>(
  'countryDetails/fetchNeighboursByCodes',
  async (codes, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL + 'alpha', {
        params: {codes: codes?.join(',')},
      })

      return response.data
    } catch (e) {
      return rejectWithValue("Failed to load countries by codes")
    }
  }
)