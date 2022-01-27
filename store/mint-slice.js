// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = { amount: 1 };

const mintSlice = createSlice({
  name: "mint",
  initialState,
  reducers: {
    handleAmount(state, action) {
      state.amount = action.payload;
    },
  },
});

export const mintActions = mintSlice.actions;
export default mintSlice;
