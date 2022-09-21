import React from 'react';
import { useGetAllCoinsQuery, } from '../api/apiSlice';
import TopfiveExerpt from './TopfiveExerpt';
import Button from './Button';
export default function Topfive() {
  const { data: coins } = useGetAllCoinsQuery();


  const sixcoin =  coins?.slice(0, 6);


  return ( <div>
    <Button />
    <div className='flex flex-wrap flex-row justify-center gap-6 w-screen'>


      {sixcoin?.map(coin => <TopfiveExerpt key={coin.id} coin={coin} />)}
    </div>
  </div>
  );
}
