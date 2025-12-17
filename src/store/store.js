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
import authReducer from "./features/auth/authSlice"; // default export
import inorganicReducer from "../store/Courses/coursesSlice";
import { injectStore } from "../configs/axiosInstanse"; // инжектим store в axios

const rootReducer = combineReducers({
  auth: authReducer,
  inorganic: inorganicReducer,
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

// inject store into axios interceptors so axiosInstance can read token from store
injectStore(store);

export { store, persistor };
export default store;