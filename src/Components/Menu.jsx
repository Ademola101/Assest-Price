import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='md:ml-48'>
      <ul className='flex  grow md:gap-40 my-4 mx-auto'>
        <li>
          <Link className='text-slate-400 hover:text-slate-50' to="/">Home</Link>
        </li>
        <li>
          <Link className='text-slate-400 hover:text-slate-50' to="/about">About</Link>
        </li>
        <li>
          <Link className='text-slate-400 hover:text-slate-50' to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
