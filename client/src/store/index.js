import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { locationsApi } from "./api/locationApi";
export const store = configureStore({
  reducer: {
    [locationsApi.reducerPath]: locationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(locationsApi.middleware);
  },
});
setupListeners(store.dispatch);
