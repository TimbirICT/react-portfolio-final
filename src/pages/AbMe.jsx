import React, { useEffect } from "react"; // Import useEffect from React

import { TypeAnimation } from "react-type-animation";
import CoderImg from "../components/coder.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../components/Navbar";
import timbir from "../components/timbir.jpg";

const AbMe = () => {
  useEffect(() => {
    document.title = "Timbir's Portfolio"; // Set document title
  }, []);

  return (
    <div>
      <Navbar />
      <div id="main" className="relative">
        <img
          className="w-full h-screen object-cover"
          src={CoderImg}
          alt="aesthetic coder"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
          <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <img
              className="w-60 h-60 rounded-full object-cover mb-4"
              src={timbir}
              alt="profile picture"
            />{" "}
            {/* Adjust size here */}
            <h1 className="sm:text-5xl text-3xl font-bold text-gray-800">
              I'm Timbir Middlebrooks
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
              I'm a
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Developer",
                  1000, // wait 1s before replacing
                  "Coder",
                  1000, // wait 1s before replacing
                  "Tech Enthusiast",
                  1000, // wait 1s before replacing
                ]}
                wrapper="div"
                cursor={true}
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-center pt-5">
              {" "}
              {/* Center align icons */}
              <a
                href="https://github.com/TimbirICT"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer mr-4"
              >
                {" "}
                {/* Add margin to the right */}
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/timbir-middlebrooks-b83725246/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {" "}
                {/* No need to add margin to the last item */}
                <FaLinkedinIn size={30} />
              </a>
            </div>
            <p className="text-xl pt-4">
              Growing up, I've always had a strong interest in technology and
              computers. I knew from a young age that my passion for these areas
              would lead to a career in technology. Over the years, I have
              consistently worked on improving my skills and learning new things
              to remain agile and ahead of the curve. After
              completing a coding bootcamp at the University of Kansas, I feel
              confident in my ability to be a successful developer. The bootcamp
              gave me a solid foundation in coding and taught me the importance
              of continuous learning and staying flexible. I am
              constantly adding new skills and remaining adaptable in this
              ever-changing field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbMe;
