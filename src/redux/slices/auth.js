// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { setSession, removeSession } from "../../utils/token";

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      if (response.status === 200) {
        setSession(response.data.accessToken, response.data.user)
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Async thunk for user logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  removeSession()
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    accessToken: JSON.parse(localStorage.getItem("accessToken")) || null,
  },
  reducers: {
    initialize(state, action) {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;

export const { initialize } = authSlice.actions;
