// chatSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/chat/send', message);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  messages: [
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ],
  loading: false,
  error: null
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default chatSlice.reducer;
