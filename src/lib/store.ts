import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import logger from "redux-logger";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === "undefined"
    ? createNoopStorage()
    : createWebStorage("local");

const rootPersistConfig = {
  key: "root",
  storage, // storage = localStorage
};

// 모든 reducer를 저장소와 연동하도록 설정 (몇몇 reducer를 제외하는 것도 가능)
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// middleware부분은 안 넣으면 직렬화 에러 뜸 자세한 내용은 아래 링크 참고
// https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(logger),
    devTools: process.env.NODE_ENV === "development",
  });
  return store;
};

// useSelector 사용할 때 이용하는 타입
// src/components/pages/RhythmLevelTests.tsx로 가면 예시 있음
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
