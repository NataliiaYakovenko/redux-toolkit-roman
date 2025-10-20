import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";

const SLICE_NAME = "users";

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, () => {
  return API.getUsers();
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: {
    [getUsers.panding]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export { getUsers };

export default userSlice.reducer;
