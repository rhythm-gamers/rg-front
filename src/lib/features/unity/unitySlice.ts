import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UnityState {
  speed: number;
  judgeTime: number;
}

const initialState: UnityState = {
  speed: 1.0,
  judgeTime: 0,
};

const unitySlice = createSlice({
  name: "unity",
  initialState,
  reducers: {
    setSpeed(state, action: PayloadAction<typeof state.speed>) {
      state.speed = action.payload;
    },
    setJudgeTime(state, action: PayloadAction<typeof state.judgeTime>) {
      state.judgeTime = action.payload;
    },
  },
});

export const { setSpeed, setJudgeTime } = unitySlice.actions;

export default unitySlice.reducer;
