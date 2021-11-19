import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, authenticate: authSlice },
});

export default store;
