import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// 기본 redux는 상태관리를 해주지만, 새로고침을 하면 이전 상태가 사라져버림.
// 그래서 redux-persist라는 라이브러리로 localStorage에 상태값을 저장하도록 함.
const persistConfig = {
  key: "root",
  storage, // 현재는 localStorage에 저장됨
};

// 모든 reducer를 저장소와 연동하도록 설정 (몇몇 reducer를 제외하는 것도 가능)
const persistedReducer = persistReducer(persistConfig, rootReducer);

// middleware부분은 안 넣으면 직렬화 에러 뜸 자세한 내용은 아래 링크 참고
// https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // vite에서는 import.meta.env로 환경변수에 접근 가능
  // https://ko.vitejs.dev/guide/env-and-mode.html
  devTools: import.meta.env.DEV,
});

// persistor와 store는 App.tsx에서 인자로 쓰임
export const persistor = persistStore(store);
export default store;

// useSelector 사용할 때 이용하는 타입
// src/components/pages/RhythmLevelTests.tsx로 가면 예시 있음
export type IRootState = ReturnType<typeof store.getState>;
