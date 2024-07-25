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
        url: `/user`,
        method: "GET",
        params: { id },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/update-user`,
        method: "PUT",
        body: body,
        params: { id },
      }),
      tagTypes: ["user"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/delete-user",
        method: "DELETE",
        // body: body,
        params: { id },
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
  useDeleteUserMutation,
} = authApi;
export default authApi;
