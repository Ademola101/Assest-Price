import React from 'react';
import SearchCoin from './SearchCoin';
export default function Header() {
  return (
    <div className='flex flex-row'>
      <h1 className='text-white m-4 vw-'>Crypto Asset</h1> <SearchCoin />
    </div>
  );
}
