import React from 'react';
import { useGetAllCoinsQuery } from '../api/apiSlice';
import TopfiveExerpt from './TopfiveExerpt';

export default function Topfive() {
  const { data: coins, refetch, isLoading } = useGetAllCoinsQuery();
  const fivecoin = coins ? coins.slice(0, 5) : [];
  if (isLoading) {
    return (<div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>);
  }

  return ( <div>
    <button onClick={refetch} type="button" >Refresh</button>
    <div className='flex flex-row gap-x-6'>

      {fivecoin?.map(coin => <TopfiveExerpt key={coin.id} coin={coin} />)}
    </div>
  </div>
  );
}
