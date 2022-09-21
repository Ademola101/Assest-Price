import React  from 'react';
import { Link } from 'react-router-dom';


const Menu = ({ handleClose }) => {

  return (
    <div className='md:ml-48 relative md:static  bottom-8  right-52 bg-white md:bg-transparent h-screen md:h-auto w-10/12 md:w-auto' >
      <div onClick={handleClose} className='md:hidden mt-8 ml-6'><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg></div>
      <ul className='flex flex-col md:flex-row md:grow md:gap-40 mt-8 md:mx-auto ml-6 gap-4 font-bold md:text-base text-lg'>
        <li>
          <Link className='md:hover:text-slate-400 md:text-slate-50 text-black' to="/">Home</Link>
        </li>
        <li>
          <Link className='md:hover:text-slate-400 md:text-slate-50 text-black' to="/about">About</Link>
        </li>
        <li>
          <Link className='md:hover:text-slate-400 md:text-slate-50 text-black' to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
