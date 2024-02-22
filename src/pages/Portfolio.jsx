
import React from "react";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";
import p6 from "../assets/img/p6.png";
import ProjectItem from "./ProjectItem";
import Navbar from "../components/Navbar";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className="text-4xl font-bold text-center text-blue">Portfolio</h1>
        <p className="text-center py-8">
          These are all the applications and databases I've worked on over the last 6 months. 
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={p1} title='Beatdeets' link='https://github.com/harmonyburke/beatdeets' />
          <ProjectItem img={p2} title='Note Taker' link='https://github.com/TimbirICT/Notes-App' />
          <ProjectItem img={p3} title='Readme Generator' link='https://github.com/TimbirICT/README-Generator' />
          <ProjectItem img={p4} title='Social Media Database' link='https://github.com/TimbirICT/Social-Network-DB' />
          <ProjectItem img={p5} title='Logo Generator' link='https://github.com/TimbirICT/Logo-Generator' />
          <ProjectItem img={p6} title='ClockWise' link='https://github.com/TimbirICT/ClockWise?tab=readme-ov-file' />
        </div>
      </div>
    </div>
  );
}
