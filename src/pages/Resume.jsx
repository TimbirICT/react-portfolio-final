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
      <h1 className="text-4xl font-bold text-center text-blue">Resume</h1>
        <img src={ResumePic} alt="Resume" />
      </div>
    </div>
  );
}

export default Resume;
