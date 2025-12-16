import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import authReducer from "./features/auth/authSlice";
import organicReducer from "../store/Organic/OrganicSlice"; // ← кошулду
import { injectStore } from "../configs/axiosInstanse";

const rootReducer = combineReducers({
  auth: authReducer,
  organic: organicReducer, // ← кошулду
});

const persistConfig = {
  key: "DIAMED-SCHOOL",
  storage: storageSession,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

injectStore(store);

export { store, persistor };
export default store;