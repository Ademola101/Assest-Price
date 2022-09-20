import React from 'react';
import { useGetAllCoinsQuery, } from '../api/apiSlice';
import TopfiveExerpt from './TopfiveExerpt';
import Button from './Button';

export default function Topfive() {
  const { data: coins, isLoading } = useGetAllCoinsQuery();


  const sixcoin =  coins?.slice(0, 6);
  if (isLoading) {
    return (<div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>);
  }

  return ( <div>
    <Button />
    <div className='flex flex-wrap flex-row justify-center gap-6 w-screen'>


      {sixcoin?.map(coin => <TopfiveExerpt key={coin.id} coin={coin} />)}
    </div>
  </div>
  );
}
