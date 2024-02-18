import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface는 객체 내부의 타입을 정의하기위해 사용
interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

// reducer는 action에 따라 실제로 동작을 수행하는 이벤트 리스너 같은 것임
// action은 reducer가 수행하는 동작을 설명하는 객체임. ex) action = {type: counter/increaseByAmount ,payload: 3}
// createSlice는 reducer를 action으로 자동생성해줌
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // "state"가 위의 initialState 객체라고 생각하면 편함
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    // PayloadAction은 incrementByAmount 함수를 사용할 때의 인자값 타입
    incrementByAmount(state, action: PayloadAction<number>) {
      // 무조건 action.payload로 인자값을 가져옴
      state.value += action.payload;
    },
  },
});

// action은 실행할 reducer를 설명하는 객체
// action함수는 해당 reducer를 실행하는 트리거 (자세한 내용이 궁금하면 물어보거나 검색)

// 위의 reducer를 실행시키기위한 action함수들
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
