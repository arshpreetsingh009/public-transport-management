import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const locationsApi = createApi({
  reducerPath: "locations",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/locations",
  }),
  endpoints(builder) {
    return {
      fetchLocations: builder.query({
        query: () => {
          return {
            url: "",
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchLocationsQuery } = locationsApi;
export { locationsApi };
