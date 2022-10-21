import React from "react";
import Navbar from "../../component/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-3/4 mt-10">
        <h1 className="text-center mt-10 text-4xl">About</h1>
        <p className="mt-4 text-center">
          I am a <b>Front-End</b> engineer who graduated from Alterra Academy.In following the bootcamp I designed and built responsive web with <b>React JS</b> or <b>Next JS</b> and several frameworks such as
          <b> CSS, Bootstrap, and Tailwind CSS</b> . with 500+ hours of work learning new technologies, and working with dedicated teams to build applications according to user needs. Currently seeking to contribute to an innovative team
          promoting opportunities for results-oriented developers.
        </p>
      </div>
    </div>
  );
};

export default Home;
