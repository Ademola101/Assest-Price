import React from 'react';
import { useGetAllCoinsQuery } from '../api/apiSlice';
import TopfiveExerpt from './TopfiveExerpt';

export default function Topfive() {
  const { data: bitcoin } = useGetAllCoinsQuery();
  const fivecoin = bitcoin ? bitcoin.slice(0, 5) : [];

  return (
    <div className='flex flex-row gap-x-14'>

      {fivecoin?.map(coin => <TopfiveExerpt key={coin.id} coin={coin} />)}
    </div>
  );
}
