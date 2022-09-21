import React  from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {

  return (
    <div className='md:ml-48 absolute md:static top-0 left-0' >
      <ul className='flex flex-col md:flex-row grow md:gap-40 my-4 mx-auto'>
        <li>
          <Link className='hover:text-slate-400 text-slate-50' to="/">Home</Link>
        </li>
        <li>
          <Link className='hover:text-slate-400 text-slate-50' to="/about">About</Link>
        </li>
        <li>
          <Link className='hover:text-slate-400 text-slate-50' to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
