import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-show-redux-backend-nicchy123.vercel.app",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
    }),
    getBooksbyId: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postBooks: builder.mutation({
      query: (book) => ({
        url: `/post/book`,
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const {useGetAllBooksQuery, useGetBooksbyIdQuery, usePostBooksMutation}  = api