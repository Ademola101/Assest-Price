import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/'

  }),

  endpoints: builder => ({
    getAllCoins: builder.query({
      query: () => '/coins/list',
    }),
    getCoin: builder.query({
      query: ({ coin,curr }) => `/simple/price?ids=${coin}&vs_currencies=${curr}`,
    })
  })

});

export const { useGetAllCoinsQuery, useGetCoinQuery } = apiSlice;