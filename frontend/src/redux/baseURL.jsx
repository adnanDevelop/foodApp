import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from './store';

// base url to request backend
export const baseUrl = "http://localhost:3000/auth/api/get-user";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;

    console.log(token);

    if (token) headers.set("Authorization", "Bearer " + token);
    return headers;
  },
});

export default baseQuery;
