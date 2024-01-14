import { configureStore } from "@reduxjs/toolkit";
import { loginSliceReducer } from "@/lib/redux/sliceLogin";

const store = configureStore({
  reducer: {
    account: loginSliceReducer.reducer,
  },
});

export default store;
