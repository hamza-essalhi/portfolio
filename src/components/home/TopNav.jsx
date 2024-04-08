import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


export default function TopNav() {

  return (
    <nav className="flex gap-3 justify-center items-center p-5 w-full">
      <div className="flex justify-between items-center w-4/5 max-sm:w-full">
        <NavLink exact to="/" activeClassName="active-link" >Home</NavLink>
        <NavLink to="/projects" activeClassName="active-link" >Projects</NavLink>
        <NavLink to="/about-me" activeClassName="active-link" >About Me</NavLink>
        <NavLink to="/contact-me" activeClassName="active-link" >Contact Me</NavLink>
        <div className='w-2/6 flex justify-end'>
        <button className=' rounded-full  p-3'><span className='max-sm:hidden'>Download Cv</span> <FaDownload className='hidden max-sm:block' /></button>

      </div>
      </div>
      
    </nav>
  );
}
