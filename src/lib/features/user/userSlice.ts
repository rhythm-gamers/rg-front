import { CURRENT_STORE_VERSION } from "@/const";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface UserState {
  STORE_VERSION: string;
}

const initialState: UserState = {
  STORE_VERSION: CURRENT_STORE_VERSION,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export default userSlice.reducer;
