import React from "react";
import Navbar from "../../component/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-3/4 mt-24 h-100vh">
        <h1 className="text-center mt-10 text-4xl">About Me</h1>
        <p className="mt-4 text-center">
          I am a <b>Front-End</b> engineer who graduated from Alterra Academy.In following the bootcamp I designed and built responsive web with <b>React JS</b> or <b>Next JS</b> and several frameworks such as
          <b> CSS, Bootstrap, and Tailwind CSS</b> . with 500+ hours of work learning new technologies, and working with dedicated teams to build applications according to user needs. Currently seeking to contribute to an innovative team
          promoting opportunities for results-oriented developers.
        </p>
      </div>
      <svg className="mt-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EFEFEF"
          fill-opacity="1"
          d="M0,32L40,58.7C80,85,160,139,240,160C320,181,400,171,480,149.3C560,128,640,96,720,96C800,96,880,128,960,128C1040,128,1120,96,1200,74.7C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
