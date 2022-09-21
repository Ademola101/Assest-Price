import React from 'react';
import { useGetAllCoinsQuery, } from '../api/apiSlice';
import TopfiveExerpt from './TopfiveExerpt';
export default function Topfive() {
  const { data: coins } = useGetAllCoinsQuery();


  const sixcoin =  coins?.slice(0, 9);


  return ( <div>
    {/* <Button /> */}
    <div className='flex flex-wrap flex-row justify-center gap-6 w-screen mt-6'>


      {sixcoin?.map(coin => <TopfiveExerpt key={coin.id} coin={coin} />)}
    </div>
  </div>
  );
}
