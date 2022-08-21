import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import searchReducer from './reducers/Search';

export const store = configureStore({

  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchReducer
  },


  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, )
});