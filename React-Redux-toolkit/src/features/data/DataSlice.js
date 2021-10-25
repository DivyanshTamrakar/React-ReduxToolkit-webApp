import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async (limit) => {
  const response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=${limit}`);
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: "idle",
    data: [],
    error:null
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = action.error.message;

    },
  },
});

export default dataSlice.reducer;
