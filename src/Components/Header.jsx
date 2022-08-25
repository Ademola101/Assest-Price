import React from 'react';
import SearchCoin from './SearchCoin';
export default function Header() {
  return (
    <div className='flex flex-row w-full'>
      <h1 className='text-white m-4 w-3/4 text-center '>Crypto Asset</h1> <SearchCoin />
    </div>
  );
}
