import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slice";

const store = configureStore({
  reducer: { cryptoReducer },
});

export default store;
