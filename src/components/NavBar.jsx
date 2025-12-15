import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'skills',
    },
    {
      id: 5,
      link: 'experience',
    },
    {
      id: 6,
      link: 'contact',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 sm:px-8 md:px-12 lg:px-16 text-white bg-black fixed z-50">
 {/* Logo/Name - Alternative fix */}
{/* Logo/Name - Fixed top cropping */}
<div className='flex items-center'>
  <h1 className='text-4xl sm:text-5xl font-signature ml-0 sm:ml-2 pt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 cursor-pointer'>
    Siddharth
  </h1>
</div>

      {/* Desktop Menu - Better spacing and hover effects */}
      <ul className='hidden md:flex gap-2 lg:gap-4 mr-0 sm:mr-4'>
        {links.map(({ id, link }) => (
          <li 
            key={id} 
            className='group px-3 lg:px-4 py-2 cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition-all duration-300 relative'
          >
          <Link
  to={link}
  smooth
  duration={500}
  offset={-80}
>
  {link}
</Link>

            {/* Animated underline */}
<span className='pointer-events-none absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300'></span>

<span className='pointer-events-none absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 rounded transition-opacity duration-300'></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div 
        onClick={() => setNav(!nav)} 
        className='cursor-pointer pr-0 sm:pr-4 z-10 text-gray-400 hover:text-cyan-400 transition-colors duration-300 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
          {links.map(({ id, link }) => (
            <li 
              key={id} 
              className='px-4 cursor-pointer capitalize py-6 text-3xl sm:text-4xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110'
            >
              <Link 
                onClick={() => setNav(!nav)} 
                to={link} 
                smooth 
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;