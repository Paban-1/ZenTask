import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../constants/index.js";

const initialState = {
  status: false,
  userData: null,
  loading: false,
  error: null,
};

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurremtUser",
  async (_, thunkAPI) => {
    try {
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // For after use
    login: (state, action) => {},
    logOut: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = true;
        state.userData = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = false;
        state.userData = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
