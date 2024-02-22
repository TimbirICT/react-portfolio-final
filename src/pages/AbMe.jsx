import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CoderImg from '../components/coder.jpg';
import { FaGithub } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const AbMe = () => {
  return (
    <div>
      <Navbar />
      <div id='main'>
        <img className='w-full h-screen object-cover' src={CoderImg} alt='aesthetic coder' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-3xl font-bold text-gray-800'>I'm Timbir Middlebrooks</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
              I'm a
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Developer',
                  1000, // wait 1s before replacing
                  'Coder',
                  1000, // wait 1s before replacing
                  'Tech Enthusiast',
                  1000, // wait 1s before replacing
                ]}
                wrapper='div'
                cursor={true}
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
              />
            </h2>
            <div className='flex justify-between pt-5 justify-center'>
            <a href='https://github.com/TimbirICT' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
            <FaGithub size={30} />
            </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbMe;
