import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IControlsState } from '../../../models';

const initialState: IControlsState = {
  search: '',
  region: null,
}

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    resetControlsState: state => state = initialState,
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setRegion(state, action: PayloadAction<unknown>) {
      state.region = action.payload;
    },
  },
})

export const { resetControlsState, setSearch, setRegion } = controlsSlice.actions;

export default controlsSlice.reducer;