// store.js
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chat';
import authReducer from './slices/auth';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    auth: authReducer,
  }
});

export default store;