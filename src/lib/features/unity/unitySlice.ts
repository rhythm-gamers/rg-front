import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UnityState {
  speed: number;
  judgeOffset: number;
  fourKeyMaps: string[];
  fiveKeyMaps: string[];
  sixKeyMaps: string[];
}

const initialState: UnityState = {
  speed: 1.0,
  judgeOffset: 0,
  fourKeyMaps: ["a", "s", ";", "'"],
  fiveKeyMaps: ["a", "s", "d", "l", ";", "'"],
  sixKeyMaps: ["a", "s", "d", "l", ";", "'"],
};

const unitySlice = createSlice({
  name: "unity",
  initialState,
  reducers: {
    setSpeed(state, action: PayloadAction<typeof state.speed>) {
      state.speed = action.payload;
    },
    setJudgeOffset(state, action: PayloadAction<typeof state.judgeOffset>) {
      state.judgeOffset = action.payload;
    },
    setFourKeyMaps(state, action: PayloadAction<typeof state.fourKeyMaps>) {
      state.fourKeyMaps = action.payload;
    },
    setFiveKeyMaps(state, action: PayloadAction<typeof state.fiveKeyMaps>) {
      state.fiveKeyMaps = action.payload;
    },
    setSixKeyMaps(state, action: PayloadAction<typeof state.sixKeyMaps>) {
      state.sixKeyMaps = action.payload;
    },
  },
});

export const {
  setSpeed,
  setJudgeOffset,
  setFourKeyMaps,
  setFiveKeyMaps,
  setSixKeyMaps,
} = unitySlice.actions;

export default unitySlice.reducer;
