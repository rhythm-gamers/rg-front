import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PracticeState {
  keyNum: number;
  filterItems: string[];
  dropdownType: string;
  sortType: string;
}

const initialState: PracticeState = {
  keyNum: 4,
  filterItems: [],
  dropdownType: "",
  sortType: "클리어 레이트순",
};

const practiceSlice = createSlice({
  name: "practice",
  initialState,
  reducers: {
    setKeyNum(state, action: PayloadAction<typeof state.keyNum>) {
      state.keyNum = action.payload;
    },
    setSortType(state, action: PayloadAction<typeof state.sortType>) {
      state.sortType = action.payload;
    },
    toggleFilterItems(state, action: PayloadAction<string>) {
      const { payload } = action;
      const prev = state.filterItems;

      state.filterItems = prev.includes(payload)
        ? prev.filter((currItem) => currItem !== payload)
        : [...prev, payload];
    },
    toggleDropdownType(state, action: PayloadAction<string>) {
      const { payload } = action;
      const prev = state.dropdownType;

      state.dropdownType = prev === "" ? payload : "";
    },
  },
});

export const { setKeyNum, setSortType, toggleFilterItems, toggleDropdownType } =
  practiceSlice.actions;

export default practiceSlice.reducer;
