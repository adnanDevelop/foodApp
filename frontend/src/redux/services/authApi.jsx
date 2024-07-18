import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/auth/api" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/get-data",
        method: "get",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetAllUserQuery } =
  authApi;
export default authApi;
