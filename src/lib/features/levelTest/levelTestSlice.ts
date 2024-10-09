import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

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
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setCurrentLevel } = levelTestSlice.actions;

export default levelTestSlice.reducer;
