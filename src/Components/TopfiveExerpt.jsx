import React from 'react';
import { FaArrowsAltH, } from 'react-icons/fa';


export default function TopfiveExerpt({ coin }) {
  return (
    <div className='border-4 rounded-md border-neutral-400 border w-28' style={{
      backgroundColor: 'hsl(242deg 25% 30%)',
    }}>

      <div className='text-slate-100 text-neutral-400 text-center'>
        {coin.name} <span><img style={{
          display: 'inline-block',
        }} className='max-h-5' src={coin.image} alt={coin.name} /></span>
        <div className= {Math.sign(coin.price_change_percentage_24h) === -1 ? 'text-rose-600' : 'text-green-400' }>

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
