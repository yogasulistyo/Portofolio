import React from "react";
import Navbar from "../../component/navbar";

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-3/4 mt-10">
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
    </div>
  );
};

export default Education;
