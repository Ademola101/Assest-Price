import React from 'react';
import { useGetAllCoinsQuery } from '../api/apiSlice';
export default function Button() {
  const { refetch } = useGetAllCoinsQuery();
  return (
    <button onClick={refetch} className='bg-green-600 h-5'>
      refresh
    </button>
  );
}
