import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UnityState {
  unload: (() => Promise<void>) | null;
  speed: number;
  judgeTime: number;
}

const initialState: UnityState = {
  unload: null,
  speed: 1.0,
  judgeTime: 0,
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
    setJudgeTime(state, action: PayloadAction<typeof state.judgeTime>) {
      state.judgeTime = action.payload;
    },
  },
});

export const { setUnload, setSpeed, setJudgeTime } = unitySlice.actions;

export default unitySlice.reducer;
