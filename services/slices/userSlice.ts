import { apiSlice } from "../api";
import { apiEndpoints } from "../../constants";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: apiEndpoints.LOGIN,
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useUserLoginMutation } = extendedApi;
