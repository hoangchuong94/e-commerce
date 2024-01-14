import { StateUserProps } from "@/type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "@/lib/redux/store";

const userInitialState: StateUserProps = {
  username: "",
  isAdmin: false,
  isLogin: false,
};

export const loginSliceReducer = createSlice({
  name: "login",
  initialState: userInitialState,
  reducers: {
    setAccount: (
      state: StateUserProps,
      action: PayloadAction<StateUserProps>
    ) => {
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin;
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setAccount } = loginSliceReducer.actions;
export type RootState = ReturnType<typeof store.getState>;
export default loginSliceReducer.reducer;
