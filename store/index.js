// Redux
import { configureStore } from "@reduxjs/toolkit";
import mintSlice from "./mint-slice";

const store = configureStore({
  reducer: { mint: mintSlice.reducer },
});

export default store;
