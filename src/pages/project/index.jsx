import React from "react";
import { TbWorld } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import Navbar from "../../component/navbar";
import poto1 from "../../pict/landingpage.png";
import poto2 from "../../pict/login.png";
import poto3 from "../../pict/aboutus.png";
import poto4 from "../../pict/home.png";
import poto5 from "../../pict/Group39.png";
import poto6 from "../../pict/Group40.png";
import poto7 from "../../pict/Group41.png";
import poto8 from "../../pict/Group42.png";
import poto9 from "../../pict/Group102.png";
import poto10 from "../../pict/Group103.png";
import poto11 from "../../pict/Group104.png";
import poto12 from "../../pict/Group105.png";

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-3/4 mt-10">
        <div>
          <h1 className="text-center mt-10 text-4xl">Projects</h1>
        </div>
        <div>
          <div className="w-full bg-[#EFEFEF] rounded-xl mt-10">
            <div className="p-3 flex items-center">
              <h1 className="font-semibold text-xl">Warehouse App</h1>
              <div className="w-1/12 ml-2 flex items-center justify-around">
                <a target="blank" href="https://warehouse-delta.vercel.app">
                  <TbWorld size={25} onClick="{deploy}" className="cursor-pointer hover:opacity-50" />
                </a>
                <a target="blank" href="https://github.com/yogasulistyo/Warehouse-App.git">
                  <SiGithub size={25} onClick="{github}" className="cursor-pointer hover:opacity-50" />
                </a>
              </div>
            </div>

            <div className="w-11/12 mx-auto">
              <p>warehouse app is an application that brings together warehouse owners who want to rent out their warehouses, to someone who needs a warehouse to store their personal items. </p>
              <ul className="ml-4">
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and React Bootstrap for styling</li>
                <li className="list-disc">Implement React Leaflet and Openstreet map for location.</li>
                <li className="list-disc">Implement Search by location</li>
                <li className="list-disc">Integrate the app to the backend RESTful API.</li>
                <li className="list-disc">Collaborate the project with the Backend and Quality Assurence Team via Trello, Github and Discord</li>
                <li className="list-disc">Deploy the web via VERCEL</li>
              </ul>
              <p>Duration : 14 Days </p>
            </div>

            <div className="flex flex-wrap justify-around mx-auto px-5 pt-3 pb-5">
              <img src={poto1} alt="landingpage" className="w-[200px] mb-2" />
              <img src={poto3} alt="about" className="w-[200px] mb-2" />
              <img src={poto2} alt="login" className="w-[200px] mb-2" />
              <img src={poto4} alt="home" className="w-[200px] mb-2" />
            </div>
          </div>

          <div className="w-full bg-[#EFEFEF] rounded-xl mt-10">
            <div className="p-3 flex items-center">
              <h1 className="font-semibold text-xl">Alterra Academy Dashboard</h1>
              <div className=" ml-2 flex items-center justify-around">
                <a target="blank" href="https://github.com/yogasulistyo/Dashboard-Alterra.git">
                  <SiGithub size={25} onClick="{github}" className="cursor-pointer hover:opacity-50" />
                </a>
              </div>
            </div>

            <div className="w-11/12 mx-auto">
              Alterra Academy dashboard is a website that stores and manages student data, such as student personal data, number of students, class start date, class list.
              <ul className="ml-4">
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and React Bootstrap for styling</li>
                <li className="list-disc">Integrate the app to the backend RESTful API.</li>
                <li className="list-disc">Collaborate the project with the Backend and Quality Assurence Team via Trello, Github and Discord</li>
              </ul>
              <p>Duration : 10 Days </p>
            </div>

            <div className="flex flex-wrap justify-around mx-auto px-5 pt-3 pb-5">
              <img src={poto5} alt="landingpage" className="w-[200px] mb-2" />
              <img src={poto6} alt="about" className="w-[200px] mb-2" />
              <img src={poto7} alt="login" className="w-[200px] mb-2" />
              <img src={poto8} alt="home" className="w-[200px] mb-2" />
            </div>
          </div>

          <div className="w-full bg-[#EFEFEF] rounded-xl mt-10">
            <div className="p-3 flex items-center">
              <h1 className="font-semibold text-xl">Altapedia</h1>
              <div className=" ml-2 flex items-center justify-around">
                <a target="blank" href="https://github.com/yogasulistyo/Dashboard-Alterra.git">
                  <SiGithub size={25} onClick="{github}" className="cursor-pointer hover:opacity-50" />
                </a>
              </div>
            </div>

            <div className="w-11/12 mx-auto">
              Altapedia is a website created to make it easier for users to sell or buy a product like an online shop.
              <ul className="ml-4">
                <li className="list-disc">Design UI/UX and wireframe using FIGMA</li>
                <li className="list-disc">Slicing design to code using Next JS and React Bootstrap for styling</li>
                <li className="list-disc">Integrate the app to the backend RESTful API.</li>
                <li className="list-disc">Collaborate the project with the Backend and Quality Assurence Team via Trello, Github and Discord</li>
              </ul>
              <p>Duration : 10 Days </p>
            </div>

            <div className="flex flex-wrap justify-around mx-auto px-5 pt-3 pb-5">
              <img src={poto9} alt="landingpage" className="w-[200px] mb-2" />
              <img src={poto10} alt="about" className="w-[200px] mb-2" />
              <img src={poto11} alt="login" className="w-[200px] mb-2" />
              <img src={poto12} alt="home" className="w-[200px] mb-2" />
            </div>
          </div>

          <div className="w-full bg-[#EFEFEF] rounded-xl mt-10">
            <div className="p-3 flex items-center">
              <h1 className="font-semibold text-xl">MovieVerse</h1>
              <div className="w-1/12 ml-2 flex items-center justify-around">
                <a target="blank" href="https://my-movies-pearl.vercel.app">
                  <TbWorld size={25} onClick="{deploy}" className="cursor-pointer hover:opacity-50" />
                </a>
                <a target="blank" href="https://github.com/yogasulistyo/MovieVerse">
                  <SiGithub size={25} onClick="{github}" className="cursor-pointer hover:opacity-50" />
                </a>
              </div>
            </div>

            <div className="w-11/12 mx-auto pb-2">
              MovieVerse is a website that displays a list of many movies made to make it easier for users to find movies that are popular, currently showing or movies that the user likes. This website is made with react js technology,
              react bootstrap styling, open API database from movidedb.com, and the design using figma.
              <p>Duration : 3 Days </p>
            </div>
          </div>

          <div className="w-full bg-[#EFEFEF] rounded-xl mt-10 mb-10">
            <div className="p-3 flex items-center">
              <h1 className="font-semibold text-xl">TodoList App</h1>
              <div className="w-1/12 ml-2 flex items-center justify-around">
                <a target="blank" href="https://todo-list-app-sigma-one.vercel.app">
                  <TbWorld size={25} onClick="{deploy}" className="cursor-pointer hover:opacity-50" />
                </a>
                <a target="blank" href="https://github.com/yogasulistyo/todo-list-app.git">
                  <SiGithub size={25} onClick="{github}" className="cursor-pointer hover:opacity-50" />
                </a>
              </div>
            </div>

            <div className="w-11/12 mx-auto pb-2">
              The todo list app is a website that can make it easier for users to plan the activities to be carried out. This website is made with react js technology, react bootstrap styling, open API database from todoist.com, and the
              design using figma.
              <p>Duration : 3 Days </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
