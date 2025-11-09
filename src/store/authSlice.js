import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {account} from "../services/appwriteClient.js"
import {registerUser, loginUser, logoutUser, getCurrentUser} from "../services/auth.js"

export const registerThunk = createAsyncThunk(
    "auth/registerUser",
    async ({email, password, name})=>{
        const user = await registerUser(email, password, name);
        return user;
    }
)

// --- LOGIN ---
export const loginThunk = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }) => {
      const user = await loginUser(email, password);
      return user;
    }
  );
  
  // --- LOGOUT ---
  export const logoutThunk = createAsyncThunk("auth/logoutUser", async () => {
    await logoutUser();
    return null;
  });
  
  // --- GET CURRENT USER ---
  export const fetchCurrentUserThunk = createAsyncThunk(
    "auth/fetchCurrentUser",
    async () => {
      const user = await getCurrentUser();
      return user;
    }
  );

  const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Register
        .addCase(registerThunk.pending, (state) => {
          state.status = "loading";
        })
        .addCase(registerThunk.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.user = action.payload;
        })
        .addCase(registerThunk.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
  
        // Login
        .addCase(loginThunk.pending, (state) => {
          state.status = "loading";
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.user = action.payload;
        })
        .addCase(loginThunk.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
  
        // Logout
        .addCase(logoutThunk.fulfilled, (state) => {
          state.user = null;
          state.status = "idle";
        })
  
        // Fetch current user
        .addCase(fetchCurrentUserThunk.fulfilled, (state, action) => {
          state.user = action.payload;
          state.status = "succeeded";
        });
    },
  });
  
  export default authSlice.reducer;
  