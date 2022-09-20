import React from 'react';
import { FaArrowsAltH, } from 'react-icons/fa';
import { setSearch } from '../reducers/Search';
import { useDispatch } from 'react-redux';




export default function TopfiveExerpt({ coin }) {

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setSearch(coin.id))} className='border-4
     rounded-md border-neutral-400  w-28 hover:bg-slate-900 bg-slate-800 cursor-pointer' >

      <div className=' text-neutral-400 text-center'>
        {coin.name} <span><img style={{
          display: 'inline-block',
        }} className='max-h-5' src={coin.image} alt={coin.name} /></span>
        <div className= {coin.price_change_percentage_24h < 0 ? 'text-rose-600' : 'text-green-400' }>

          {coin.price_change_percentage_24h}%</div>
      </div>
      <span >
        <span className='text-neutral-400 flex items-center justify-center'>{coin.symbol} <FaArrowsAltH  style={{
          display: 'inline-block',
        }}/> <span>usd</span></span>
      </span>
      <div className='text-center font-medium text-slate-100'>
      &#36;{coin.current_price}
      </div>

    </div>
  );
}
