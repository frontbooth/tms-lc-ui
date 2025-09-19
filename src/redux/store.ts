import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { Reducer } from "redux"; 

// --- Persist Config ---
const persistConfig = {
  key: "root",
  storage,
  whitelist: [], // Add reducers you want to persist here
};

// --- Root Reducer ---
const rootReducer: Reducer = (state = {}, action) => {
  return state;
};

// --- Persisted Reducer ---
const persistedReducer = persistReducer(persistConfig, rootReducer);

// --- Store ---
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// --- Persistor ---
export const persistor = persistStore(store);

// --- Types ---
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
