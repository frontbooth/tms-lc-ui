// src/store/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import lovReducer from "./slice/lov";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lov"], 
};

const rootReducer = combineReducers({
  lov: lovReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
