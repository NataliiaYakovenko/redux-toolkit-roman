import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { THEMES } = CONSTANTS;

const initialState = THEMES.LIGHT;

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setTheme: (state, action) =>
      state === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
  },
});

const { reducer, actions } = themeSlice;

const { setTheme } = actions;

export { setTheme };

export default reducer;
