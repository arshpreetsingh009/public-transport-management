import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const bussesApi = createApi({
  reducerPath: "busses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/getbusses",
  }),
  endpoints(builder) {
    return {
      searchBusses: builder.query({
        query: (data) => {
          return {
            url: "",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});
export const { useLazySearchBussesQuery } = bussesApi;
export { bussesApi };
