import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  themeType: string;
}

const initialState: IThemeState = {
  themeType: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      state.themeType === 'light' 
      ? state.themeType = 'dark' 
      : state.themeType = 'light'
    }
  }
})

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;