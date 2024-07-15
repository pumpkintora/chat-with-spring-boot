// chatRoomSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

// Create an async thunk for sending a message
export const getChatRooms = createAsyncThunk(
  "chatRoom/getChatRooms",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/chatroom/user/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

function objFromArr(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur.chatroomId] = {
      name: cur.name,
      users: cur.users,
      messages: cur.chatMessages,
    };
    return acc;
  }, {});
}

// Initial state with multiple chat rooms
const initialState = {
  rooms: {},
  loading: false,
  error: null,
};

const chatRoomSlice = createSlice({
  name: "chatroom",
  initialState,
  reducers: {
    addMessageToRoom: (state, action) => {
      const { roomId, message } = action.payload;
      if (!state.rooms[roomId]) {
        state.rooms[roomId] = { messages: [] };
      }
      state.rooms[roomId].messages.push(message);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatRooms.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = objFromArr(action.payload);
      })
      .addCase(getChatRooms.rejected, (state, action) => {
        const { error } = action.payload;
        state.loading = false;
        state.error = error;
      });
  },
});

export const { addMessageToRoom } = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
