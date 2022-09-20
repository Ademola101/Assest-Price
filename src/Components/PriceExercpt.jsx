import React from 'react';
import { FaArrowsAltH, } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useGetAllCoinsQuery } from '../api/apiSlice';
import { CgArrowsExchangeAltV, CgMathEqual } from 'react-icons/cg';

export default function PriceExercpt({ coin }) {

  const searchValue = useSelector(state => state.search);
  const { data:coinData } = useGetAllCoinsQuery();
  const coinDataValue = coinData?.find(coinData => coinData.id === searchValue);


  return (


    <div  >
      <div>
        <div className='flex flex-col justify-center items-center bg-slate-900 w-64 m-auto
         text-white mb-5 rounded-lg'>
          <div className='text-white'><span>
            <CgArrowsExchangeAltV style={{
              display: 'inline-block',
            }} />  <small>24h</small> <CgMathEqual style={{
              display: 'inline-block',
            }} />
          </span> <small className= {coinDataValue.price_change_percentage_24h < 0 ? 'text-rose-600' :
            'text-green-400'}>{coinDataValue.price_change_percentage_24h}%</small> </div>
          <img className='max-h-7 mt-4' src= {coin.image} alt =  {coin.name}  />
          {/* <div>
            Current price

          </div> */}

          <span className='mb-4'>1 {coin.name} <FaArrowsAltH style={{
            display: 'inline-block',
          }}/> &#36;{coin.current_price}</span>

        </div>

        <span>

        </span>
      </div>

    </div>

  );
}
