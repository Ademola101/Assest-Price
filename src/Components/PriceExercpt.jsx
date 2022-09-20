import React from 'react';
import { FaArrowsAltH, } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useGetCoinQuery } from '../api/apiSlice';


export default function PriceExercpt({ coin }) {

  const searchValue = useSelector(state => state.search);
  const { data:coinData } = useGetCoinQuery(searchValue);
  console.log(coinData);

  return (


    <div  >
      <div>
        <div className='flex flex-col justify-center items-center bg-slate-900 w-64 m-auto text-white mb-5 rounded-lg'>
          <img className='max-h-7 mt-4' src= {coin.image} alt =  {coin.name}  />
          {/* <div>
            Current price

          </div> */}

          <span className='mb-4'>1 {coin.name} <FaArrowsAltH style={{
            display: 'inline-block',
          }}/> &#36;{coin.current_price}</span>
        </div>
        <div > {coinData[0]?.price_change_percentage_24h.toFixed(2)}</div>
        <span>

        </span>
      </div>

    </div>

  );
}
