import React from "react";
import Navbar from "../../component/navbar";

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-3/4 mt-24">
        <h1 className="text-center mt-10 text-4xl">Education</h1>
        <div className="w-3/4 mx-auto flex-col mt-6">
          <div className="w-10/12">
            <p className="font-semibold text-xl">Immersive Bootcamp</p>
            <p className="opacity-50">Front End Engineer</p>
            <p className="font-medium">Alterra Academy</p>
            <p className="opacity-80">August - October 2022</p>
            <ul className="mt-5 text-sm">
              <li>
                <p>Learn HTML, CSS, Tailwind CSS, Javascript, UI/UX, Node JS, React JS, Next JS, Git & Github, and Scrum agile method.</p>
              </li>
              <li className="mt-3">
                <p>
                  Build projects with team, start with design the UI/UX using figma, build with React or Next and styling using tailwind, then integrate with API that has been made by Backend team and deploy the web via Vercel, checked by
                  QA team, and finally presented with slides.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-3/4 mt-10 ">
            <p className="font-semibold text-xl">Diploma III</p>
            <p className="opacity-50">Electrical Engineering</p>
            <p className="font-medium">Politeknik Negeri Sriwijaya</p>
            <p className="opacity-80">2015 - 2018</p>
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

export default Education;
