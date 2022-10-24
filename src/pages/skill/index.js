import React from "react";
import Navbar from "../../component/navbar";
import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss, SiFigma, SiAdobephotoshop, SiTrello, SiBootstrap } from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const Skill = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-3/4 mt-24">
        <h1 className="text-center mt-10 text-4xl">Skills</h1>
        <div className="mt-4 text-center">
          <div className="w-3/4 mx-auto flex flex-wrap justify-around ">
            <div className="md:m-5">
              <SiHtml5 size={70} color="#2c3e50" alt="html" />
              <p className="text-center">HTML</p>
            </div>

            <div className="md:m-5">
              <SiCss3 size={70} color="#2c3e50" alt="css" />
              <p className="text-center">CSS</p>
            </div>

            <div className="md:m-5">
              <SiJavascript size={70} color="#2c3e50" alt="js" />
              <p className="text-center">Javascript</p>
            </div>

            <div className="md:m-5">
              <FaReact size={70} color="#2c3e50" alt="react" />
              <p className="text-center">React JS</p>
            </div>

            <div className="md:m-5">
              <SiNextdotjs size={70} color="#2c3e50" alt="next" />
              <p className="text-center">Next JS</p>
            </div>

            <div className="md:m-5">
              <SiBootstrap size={70} color="#2c3e50" alt="tailwind" />
              <p className="text-center">Bootstrap</p>
            </div>

            <div className="md:m-5">
              <SiTailwindcss size={70} color="#2c3e50" alt="tailwind" />
              <p className="text-center">Tailwind</p>
            </div>

            <div className="md:m-5">
              <SiFigma size={70} color="#2c3e50" alt="figma" />
              <p className="text-center">Figma</p>
            </div>

            <div className="md:m-5">
              <FaNodeJs size={70} color="#2c3e50" alt="node" />
              <p className="text-center">Node JS</p>
            </div>

            <div className="md:m-5">
              <FaGithub size={70} color="#2c3e50" alt="github" />
              <p className="text-center">Github</p>
            </div>

            <div className="md:m-5">
              <SiTrello size={70} color="#2c3e50" alt="trello" />
              <p className="text-center">Trello</p>
            </div>

            <div className="md:m-5">
              <SiAdobephotoshop size={70} color="#2c3e50" alt="photoshop" />
              <p className="text-center">Photoshop</p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EFEFEF"
          fill-opacity="1"
          d="M0,32L40,58.7C80,85,160,139,240,160C320,181,400,171,480,149.3C560,128,640,96,720,96C800,96,880,128,960,128C1040,128,1120,96,1200,74.7C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Skill;
