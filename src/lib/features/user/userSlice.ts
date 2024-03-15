import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLogin: boolean;
}

const initialState: UserState = {
  isLogin: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<typeof state.isLogin>) {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = userSlice.actions;

export default userSlice.reducer;
