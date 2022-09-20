import React from 'react';
import { useGetAllCoinsQuery } from '../api/apiSlice';
export default function Button() {

  const { refetch } = useGetAllCoinsQuery();
  const handleClick = () => {
    refetch();
  };
  return (
    <button  onClick={handleClick} className='bg-red-500 hover:bg-red-900 text-white   mx-auto my-8 p-2 rounded-md flex'>
      refresh
    </button>
  );
}
