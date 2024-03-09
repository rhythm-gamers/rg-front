import { combineReducers } from "@reduxjs/toolkit";
import unity from "./features/unity/unitySlice";
import practice from "./features/practice/practiceSlice";
import levelTest from "./features/levelTest/levelTestSlice";

// 여러 개의 reducer들을 하나로 합쳐주는 함수
export default combineReducers({
  unity,
  practice,
  levelTest,
});
