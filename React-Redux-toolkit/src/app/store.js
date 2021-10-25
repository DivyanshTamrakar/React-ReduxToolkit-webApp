import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/data/DataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
