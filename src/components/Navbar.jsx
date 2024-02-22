import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from'react-icons/bs';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log('nav state changed');
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99]' />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/70 flex flex-col items-center justify-start z-20'>
          <a href="/" className='w-[50%] flex justify-center items-center rounded-full shadow-lg rounded-full m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
            <AiOutlineHome size={20} />
            <span className='pl-4'>About Me</span>
          </a>
          <a href="/portfolio" className='w-[50%] flex justify-center items-center rounded-full shadow-lg rounded-full m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
           <AiOutlineProject size={20} />
            <span className='pl-4'>Portfolio</span>
          </a>
          <a href="/contact" className='w-[50%] flex justify-center items-center rounded-full shadow-lg rounded-full m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
            <AiOutlineMail size={20} /> 
            <span className='pl-4'>Contact Me</span>
          </a>
          <a href="/resume" className='w-[50%] flex justify-center items-center rounded-full shadow-lg rounded-full m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
            <BsPerson size={20} />
            <span className='pl-4'>Resume</span>
          </a>
        </div>
      ) : (
       ''
      )}
    </div>
  );
};

export default Navbar;
