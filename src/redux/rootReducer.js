// rootReducer.js
import { combineReducers } from "redux";
import chatroomReducer from "./slices/chatroom";
import authReducer from "./slices/auth";
// import userReducer from './userSlice';

const rootReducer = combineReducers({
  chatroom: chatroomReducer,
  auth: authReducer,
});

export default rootReducer;
