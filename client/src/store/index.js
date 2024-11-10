import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { locationsApi } from "./api/locationApi";
import { bussesApi } from "./api/bussesApi";
export const store = configureStore({
  reducer: {
    [locationsApi.reducerPath]: locationsApi.reducer,
    [bussesApi.reducerPath]: bussesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(locationsApi.middleware)
      .concat(bussesApi.middleware);
  },
});
setupListeners(store.dispatch);
