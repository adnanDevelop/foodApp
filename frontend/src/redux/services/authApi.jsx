import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/auth/api" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user"],
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
        method: "GET",
      }),
    }),

    getUserById: builder.query({
      query: (id) => ({
        url: `/get-user?id=${id}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/update-user?id=${id}`,
        method: "PUT",
        body: payload,
      }),
      tagTypes: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserByIdQuery,
  useGetAllUserQuery,
  useUpdateUserMutation,
} = authApi;
export default authApi;
