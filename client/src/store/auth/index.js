import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const registerUser = createAsyncThunk("auth/register", async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/register",
    data
  );
  return response.data;
});
export const loginUser = createAsyncThunk("auth/login", async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    data
  );
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.user = actions.payload.success ? actions.payload.user : null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;
