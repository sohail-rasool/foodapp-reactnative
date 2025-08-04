// src/services/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL || "http://192.168.1.25:3000", // Use the BASE_URL from .env or default to localhost
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}), // Initially, no endpoints are defined
});

export default apiSlice;
