import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import langReducer from "./langSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const balancePersistConfig = {
  key: "balanceValue",
  storage,
  whitelist: ["value"],
};

const pBalanceReducer = persistReducer(balancePersistConfig, balanceReducer);

const localePersistConfig = {
  key: "lang",
  storage,
  whitelist: ["lang"],
};

const pLocaleReducer = persistReducer(localePersistConfig, langReducer);

export const store = configureStore({
  reducer: {
    balance: pBalanceReducer,
    locale: pLocaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
