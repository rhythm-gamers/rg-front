"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, persistStore } from "redux-persist";

interface IStoreProvider {
  children: ReactNode;
}

interface IEnhancedAppStore extends AppStore {
  __persistor?: Persistor;
}

export default function StoreProvider({ children }: IStoreProvider) {
  const storeRef = useRef<IEnhancedAppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.__persistor = persistStore(storeRef.current);
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
