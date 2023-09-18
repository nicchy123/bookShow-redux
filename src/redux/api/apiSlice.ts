import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'books',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
      getAllBooks: builder.query({
        query: () => `/books`,
      }),
      getBooksbyId: builder.query({
        query: (id) => `/book/${id}`,
      }),
    }),
  })

export const {useGetAllBooksQuery, useGetBooksbyIdQuery}  = api