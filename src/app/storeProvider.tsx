"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, persistStore } from "redux-persist";
import { CURRENT_STORE_VERSION } from "@/const";

interface IStoreProvider {
  children: ReactNode;
}

interface IEnhancedAppStore extends AppStore {
  __persistor?: Persistor;
}

export default function StoreProvider({ children }: IStoreProvider) {
  const storeRef = useRef<IEnhancedAppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.__persistor = persistStore(
      storeRef.current,
      null,
      async () => {
        if (!storeRef.current) return;
        const persistedState = storeRef.current.getState();

        if (persistedState.user.STORE_VERSION !== CURRENT_STORE_VERSION) {
          console.log("스토어 버전이 변경됨. 스토어를 초기화합니다.");
          await storeRef.current.__persistor!.flush();
          await storeRef.current.__persistor!.purge();
          storeRef.current.__persistor!.persist();
        }
      },
    );
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate
        persistor={storeRef.current.__persistor!}
        loading={<div>loading...</div>}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
