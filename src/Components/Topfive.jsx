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
    <button onClick={refetch} type="button" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none
    focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Refresh</button>
    <div className='flex flex-row gap-x-6'>

      {fivecoin?.map(coin => <TopfiveExerpt key={coin.id} coin={coin} />)}
    </div>
  </div>
  );
}
