// rootReducer.js
import { combineReducers } from 'redux';
import chatReducer from './chatSlice';
// import userReducer from './userSlice';

const chatPersistConfig = {
  key: 'chat',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  chat: persistReducer(chatPersistConfig, chatReducer),
});

export default rootReducer;
