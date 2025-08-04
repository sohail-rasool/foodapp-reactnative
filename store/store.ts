// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../services/api";
import { appSlice } from "../services/slices/appSlice";

export const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer here
    [apiSlice.reducerPath]: apiSlice.reducer,
    app: appSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
