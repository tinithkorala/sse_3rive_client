import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import uiReducer from "./slices/uiSlice";

const uiPersistConfig = {
  key: "ui",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  ui: persistReducer(uiPersistConfig, uiReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["persist.register", "persist.rehydrate"],
      },
    }),
});

export const persistor = persistStore(store);
