import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UnityState {
  unload: (() => Promise<void>) | null;
}

const initialState: UnityState = { unload: null };

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
