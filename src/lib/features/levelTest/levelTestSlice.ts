import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LevelTestState {
  currentLevel: number;
}

const initialState: LevelTestState = {
  currentLevel: 1,
};

const levelTestSlice = createSlice({
  name: "levelTest",
  initialState,
  reducers: {
    setCurrentLevel(state, action: PayloadAction<number>) {
      state.currentLevel = action.payload;
    },
  },
});

export const { setCurrentLevel } = levelTestSlice.actions;

export default levelTestSlice.reducer;
