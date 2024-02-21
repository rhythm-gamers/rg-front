"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { IPersistStore, makeStore } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";

interface IStoreProvider {
  children: ReactNode;
}

export default function StoreProvider({ children }: IStoreProvider) {
  const storeRef = useRef<IPersistStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
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
