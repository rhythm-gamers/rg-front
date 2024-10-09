import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface PracticeState {
  selectedLevels: string[];
  selectedPatterns: string[];
  selectedOrder: "레벨순" | "클리어 레이트순";
}

const initialState: PracticeState = {
  selectedLevels: [],
  selectedPatterns: [],
  selectedOrder: "레벨순",
};

const practiceSlice = createSlice({
  name: "practice",
  initialState,
  reducers: {
    setSelectedLevels(state, action: PayloadAction<string[]>) {
      state.selectedLevels = action.payload;
    },
    setSelectedPatterns(state, action: PayloadAction<string[]>) {
      state.selectedPatterns = action.payload;
    },
    setSelectedOrder(
      state,
      action: PayloadAction<"레벨순" | "클리어 레이트순">,
    ) {
      state.selectedOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setSelectedLevels, setSelectedPatterns, setSelectedOrder } =
  practiceSlice.actions;

export default practiceSlice.reducer;
