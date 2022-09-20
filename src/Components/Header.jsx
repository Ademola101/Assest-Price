import React from 'react';
import { GiChart } from 'react-icons/gi';
import Menu from './Menu';
export default function Header() {
  return (
    <div className='flex flex-row w-full '>
      <div className='text-white m-4 w-1/4 text-center '><GiChart/>
        <div className='uppercase'>
        Crypto Tracker Chart
        </div>
      </div>
      <Menu />
    </div>
  );
}
