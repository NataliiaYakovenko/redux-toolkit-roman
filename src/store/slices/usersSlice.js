import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../api";

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
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export { getUsers };

export default userSlice.reducer;
