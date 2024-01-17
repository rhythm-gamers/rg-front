import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/counterSlice";
import { IRootState } from "../../redux/store";
import { useState } from "react";

// redux state 사용예시
const RhythmLevelTests = () => {
  const [amount, setAmount] = useState(1);

  // redux는 "reducer"를 통해서 내부 스토어를 업데이트 함
  // 우리가 만든 reducer를 사용하려면 useDispatch를 통해 action함수를 실행시켜야 함.
  const dispatch = useDispatch();

  // useSelector 안의 "state"는 모든 reducer를 가지고 있는 객체임
  // IRootState는 라이브러리에서 제공해주는 타입 (이걸 해줘야 vscode 자동완성이 제공됨)
  const counter = useSelector((state: IRootState) => state.counter.value);

  const increaseCounter = () => {
    // counterSlice에서 만든 increment 함수를 dispatch 안에 넣어줌으로써 실행
    dispatch(increment());
  };
  const decreaseCounter = () => {
    dispatch(decrement());
  };
  const increaseCounterByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-white">
      <button type="button" onClick={increaseCounter} className="bg-red-400">
        증가 버튼
      </button>
      <span className="text-black">{counter}</span>
      <button type="button" onClick={decreaseCounter} className="bg-blue-400 mb-10">
        감소 버튼
      </button>
      <button
        type="button"
        onClick={() => increaseCounterByAmount(amount)}
        className="bg-red-400 mb-5"
      >
        {amount}만큼 증가
      </button>
      <button
        type="button"
        onClick={() => {
          setAmount((prev) => prev + 1);
        }}
        className="bg-green-400"
      >
        개수 증가
      </button>
      <button
        type="button"
        onClick={() => {
          setAmount((prev) => prev - 1);
        }}
        className="bg-yellow-400"
      >
        개수 감소
      </button>
    </div>
  );
};

export default RhythmLevelTests;
