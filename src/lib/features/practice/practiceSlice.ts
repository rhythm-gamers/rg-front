import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PracticeState {
  keyName: string;
  filterItems: string[];
  dropdownType: string;
  sortType: string;
}

const initialState: PracticeState = {
  keyName: "4키",
  filterItems: [],
  dropdownType: "",
  sortType: "클리어 레이트순",
};

const practiceSlice = createSlice({
  name: "practice",
  initialState,
  reducers: {
    setKeyName(state, action: PayloadAction<string>) {
      state.keyName = action.payload;
    },
    setSortType(state, action: PayloadAction<string>) {
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

export const {
  setKeyName,
  setSortType,
  toggleFilterItems,
  toggleDropdownType,
} = practiceSlice.actions;

export default practiceSlice.reducer;
