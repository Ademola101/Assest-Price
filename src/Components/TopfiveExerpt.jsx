import React from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

export default function TopfiveExerpt({ coin }) {
  return (
    <div>
      <div>
        {coin.name} <span><img style={{
          display: 'inline-block',
        }} className='max-h-5' src={coin.image} alt={coin.name} /></span>
      </div>
      <span>
        <span>{coin.symbol} <FaArrowsAltH style={{
          display: 'inline-block',
        }}/> <span>usd</span></span>
      </span>
      <div>
        {coin.current_price}
      </div>
    </div>
  );
}
