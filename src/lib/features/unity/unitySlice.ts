import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface IVolume {
  current: number;
  prevMute?: number;
}

interface UnityState {
  speed: number;
  judgeOffset: number;
  volume: IVolume;
  fourKeyMaps: string[];
  fiveKeyMaps: string[];
  sixKeyMaps: string[];
}

const initialState: UnityState = {
  speed: 1.0,
  judgeOffset: 0,
  volume: {
    current: 0.5,
    prevMute: undefined,
  },
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
    setVolume(state, action: PayloadAction<typeof state.volume>) {
      state.volume = action.payload;
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
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  setSpeed,
  setJudgeOffset,
  setVolume,
  setFourKeyMaps,
  setFiveKeyMaps,
  setSixKeyMaps,
} = unitySlice.actions;

export default unitySlice.reducer;
