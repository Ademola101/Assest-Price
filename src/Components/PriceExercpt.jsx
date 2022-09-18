import React from 'react';
import { FaArrowsAltH, } from 'react-icons/fa';


export default function PriceExercpt({ coin }) {


  return (


    <div  >
      <div>
        <div   className='flex flex-col justify-center items-center bg-slate-900 w-64 m-auto text-white mb-5 rounded-lg'>
          <img className='max-h-7' src= {coin.image} alt =  {coin.name}  /> <div>
            Current price

          </div>

          <span>1 {coin.name} <FaArrowsAltH style={{
            display: 'inline-block',
          }}/> &#36;{coin.current_price}</span>
        </div> <span>

        </span>
      </div>

    </div>

  );
}
