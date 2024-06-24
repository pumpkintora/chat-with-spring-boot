// store.js
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chat';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    // Add other reducers here if you have them
  }
});

export default store;