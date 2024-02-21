import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UnityState {
  unload: (() => Promise<void>) | null;
  speed: number;
  judgementLineOffset: number;
}

const initialState: UnityState = {
  unload: null,
  speed: 3.0,
  judgementLineOffset: 0,
};

const unitySlice = createSlice({
  name: "unity",
  initialState,
  reducers: {
    setUnload(state, action: PayloadAction<typeof state.unload>) {
      state.unload = action.payload;
    },
  },
});

export const { setUnload } = unitySlice.actions;

export default unitySlice.reducer;
