import React from 'react';
import { GiChart } from 'react-icons/gi';
import Menu from './Menu';
export default function Header() {
  return (
    <div className='flex flex-row w-full justify-center md:justify-start my-8 '>

      <div className='md:hidden mt-2 '> <svg  width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg></div>

      <div className='text-white md:m-4 md:w-1/4 text-center w-10/12 '>
        <GiChart style={{
          display: 'inline-block',
        }}/> <span className='uppercase ml-4'>
        Crypto Tracker Chart
        </span>
      </div>
      <Menu />
    </div>
  );
}
