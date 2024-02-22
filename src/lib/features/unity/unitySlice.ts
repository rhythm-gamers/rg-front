import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UnityState {
  unload: (() => Promise<void>) | null;
  speed: number;
  judgementLineOffset: number;
}

const initialState: UnityState = {
  unload: null,
  speed: 1.0,
  judgementLineOffset: 0,
};

const unitySlice = createSlice({
  name: "unity",
  initialState,
  reducers: {
    setUnload(state, action: PayloadAction<typeof state.unload>) {
      state.unload = action.payload;
    },
    setSpeed(state, action: PayloadAction<typeof state.speed>) {
      state.speed = action.payload;
    },
  },
});

export const { setUnload, setSpeed } = unitySlice.actions;

export default unitySlice.reducer;
