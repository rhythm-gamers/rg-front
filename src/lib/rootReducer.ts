import { combineReducers } from "@reduxjs/toolkit";
import counter from "./features/counter/counterSlice";

// 여러 개의 reducer들을 하나로 합쳐주는 함수
export default combineReducers({
  counter,
});
