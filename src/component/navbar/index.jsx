import React from "react";
import poto from "../../pict/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-10 justify-between flex ">
        <div className="flex  ">
          <div>
            <img src={poto} alt="foto" className="w-36 rounded-full mt-8 border-2 border-[#7C8587] drop-shadow-2xl" />
          </div>
          <div className="mt-20 ml-3">
            <p className="text-5xl font-medium  border-t-2 border-[#7C8587]">Yoga Sulistyo </p>
            <p className="mt-2 ml-1  ">Front-end Engineer</p>
          </div>
        </div>
        <div className="mt-40 text-2xl flex ">
          <a className="mr-2" href="https://www.linkedin.com/in/yoga-sulistyo-684b54253/">
            <FaLinkedin />
          </a>
          <a className="mr-2" href="https://github.com/yogasulistyo">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="bg-[#EFEFEF] drop-shadow-xl mt-2 mx-auto w-3/4 justify-between flex h-12 rounded-2xl font-medium text-lg">
        <div className="m-auto border-b-4 border-[#7C8587]">
          <a href="/">About</a>
        </div>
        <div className="m-auto border-b-4 border-[#7C8587]">
          <Link to="/skill">Skill</Link>
        </div>
        <div className="m-auto border-b-4 border-[#7C8587]">
          <a href="/education">Education</a>
        </div>
        <div className="m-auto border-b-4 border-[#7C8587]">
          <a href="/project">Project</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
