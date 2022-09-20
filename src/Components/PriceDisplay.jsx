import React from 'react';
import { useGetCoinQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import PriceExercpt from './PriceExercpt';
export default function PriceDisplay() {
  const search = useSelector(state => state.search);
  const searchvalue =  search === '' ? 'bitcoin' : search;
  const { data, isError, } = useGetCoinQuery(searchvalue);

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      {data?.map(coin => <PriceExercpt key={coin.id} coin={coin} />)}

    </div>
  );
}
