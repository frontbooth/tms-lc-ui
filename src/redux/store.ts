import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import currencyReducer from "./slice/currencySlice"; 
import lcTypeReducer from "./slice/lcTypeSlice"; 

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currency", "lcType"],  
};

// --- Root Reducer ---
const rootReducer = combineReducers({
  currency: currencyReducer,
  lcType: lcTypeReducer,
});

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
