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
      query: ( coin) => `/coins/markets?vs_currency=usd&ids=${coin}`,
    }),
    getMarketChart: builder.query({
      query: ({ coin = 'bitcoin', interval = 'daily' }) => `coins/${coin}/market_chart?vs_currency=usd&days=4&${interval}`
    })
  })


});

export const { useGetAllCoinsQuery, useGetCoinQuery, useGetMarketChartQuery } = apiSlice;