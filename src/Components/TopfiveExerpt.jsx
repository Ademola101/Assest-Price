import React from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

export default function TopfiveExerpt({ coin }) {
  return (
    <div className='"border-4 border-rgb(113 113 122) border'>
      <div>
        {coin.name} <span><img style={{
          display: 'inline-block',
        }} className='max-h-5' src={coin.image} alt={coin.name} /></span>
        <div className= {Math.sign(coin.price_change_percentage_24h) === -1 ? 'text-rose-600' : 'text-green-400' }>
          {coin.price_change_percentage_24h}</div>
      </div>
      <span>
        <span>{coin.symbol} <FaArrowsAltH style={{
          display: 'inline-block',
        }}/> <span>usd</span></span>
      </span>
      <div className='text-center font-medium'>
        {coin.current_price}
      </div>
    </div>
  );
}
