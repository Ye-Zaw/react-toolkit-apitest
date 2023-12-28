import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
