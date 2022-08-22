import React from 'react';

export default function PriceExercpt({ coin }) {

  return (
    <div>

      <div>
        <div>
          <span>{coin.name} <div>
            <img className='max-h-7' src= {coin.image} alt =  {coin.name}  />
          </div></span> <span>
            {coin.symbol}
          </span>
        </div>

      </div>
    </div>
  );
}
