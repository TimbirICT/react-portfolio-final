import React from 'react';
import Navbar from '../components/Navbar';
import ResumePic from '../assets/img/resume.png';

const Resume = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={ResumePic} alt="Resume" />
      </div>
    </div>
  );
}

export default Resume;
