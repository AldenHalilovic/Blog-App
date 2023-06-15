import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {
  FLUSH,
  PURGE,
  REHYDRATE,
  PAUSE,
  persistStore,
  PERSIST,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store, null);
