import React from 'react';
import { useGetCoinQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';

export default function PriceDisplay() {
  const search = useSelector(state => state.search);
  const searchvalue =  search === '' ? 'bitcoin' : search;
  const { data, isError, isFetching } = useGetCoinQuery({ coin:searchvalue, curr:'usd' });

  if (isFetching) {
    return <div>Loading...</div>;}
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>{JSON.stringify(data)}</div>
  );
}
