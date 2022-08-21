import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/'

  }),

  endpoints: builder => ({
    getAllCoins: builder.query({
      query: () => '/coins/markets?vs_currency=usd',
    }),
    getCoin: builder.query({
      query: ({ coin ,curr }) => `/coins/markets?vs_currency=${curr}&ids=${coin}`,
    })
  })

});

export const { useGetAllCoinsQuery, useGetCoinQuery } = apiSlice;