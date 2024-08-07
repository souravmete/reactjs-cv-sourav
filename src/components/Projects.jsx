import React, { useState } from "react";
import { TitleHead } from "./common/TitleHead";

// react icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TiSortAlphabetically } from "react-icons/ti";

// import reactWeather from "../assets/portfolio/reactWeather.jpg";

import travelingLandingPage from "../assets/portfolio/travelling.png"

import onlineLearningPlatform from "../assets/portfolio/onlineLearningPlatform.png";

import portfolio from "../assets/portfolio/portfolioJs.png";

import weather from "../assets/portfolio/weatherJs.png";

import gradient from "../assets/portfolio/gradient.png";

import passwordGen from "../assets/password-generator-3.webp";

import reactWeather from "../assets/portfolio/reactWeatherapp.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      src: reactWeather,
      category: "react",
      demo: "https://weather-app-reactjs-orpin-five.vercel.app/",
      code: "https://github.com/souravmete/weather-app-reactjs",
    },
    // {
    //   id: 2,
    //   src: reactParallax,
    //   demo:"https://online-edu-platform.netlify.app/",
    //   code:"https://github.com/souravmete/onlineEducation.github.io"
    // },
    // {
    //   id: 2,
    //   src: passwordGen,
    //   demo:"https://passwordgenrtor.netlify.app/",
    //   code:"https://github.com/souravmete/passwordGenerator"
    // },
    {
      id: 3,
      src: gradient,
      category: "js",
      demo: "https://669973bb9dd1e04f30104ac1--wonderful-vacherin-5ca0a1.netlify.app/",
      code: "https://github.com/souravmete/Gradient-changer",
    },
    {
      id: 4,
      src: weather,
      category: "js",
      demo: "https://weatherapp-html-js.netlify.app/",
      code: "https://github.com/souravmete/weather-app-js",
    },
    {
      id: 5,
      src: portfolio,
      category: "js",
      demo: "https://portfolio-js-sourav.netlify.app/",
      code: "https://github.com/souravmete/portfolio",
    },
    {
      id: 6,
      category: "js",
      src: onlineLearningPlatform,
      demo: "https://online-edu-platform.netlify.app/",
      code: "https://github.com/souravmete/onlineEducation.github.io",
    },
    {
      id:7,
      category:'html',
      src: travelingLandingPage,
      demo:"https://travelling-site-html.netlify.app/",
      code:"https://github.com/souravmete/travelling-site"
    }
  ];



  const [items, setItems] = useState(projects);


  const handelFilterItems=(categoryItem)=>{
    const updateItems = projects.filter((curr)=>{
      return curr.category === categoryItem;
    })

    console.log(updateItems)

    setItems(updateItems)
  }

  return (
    <>
      <div
        name="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-[1000px]"
      >
        <div className="max-w-screen-lg p-4 pb-0 mx-auto flex flex-col justify-center w-full h-[1000px]">
          {/* title head */}

          <TitleHead
            title="Projects"
            decription="Check out some of my work right here"
          />

          <div className="flex justify-center items-center gap-5 mb-10">
            <button 
            onClick={()=>setItems(projects)}      
            className="flex items-center gap-1 group text-white w-fit px-4 py-2 my-2 rounded-md bg-gradient-to-r from-[#ad80b7] to-[#d779e7] cursor-pointer"
             >
              <span>All</span>
              <TiSortAlphabetically size={14} />
            </button>

            <button 
            onClick={()=>handelFilterItems('react')}className="flex items-center gap-1  group text-white w-fit px-4 py-2 my-2 rounded-md bg-gradient-to-r from-[#ad80b7] to-[#d779e7] cursor-pointer">
              <span>React</span>
              <FaReact size={14} />
            </button>

            <button 
            onClick={()=>handelFilterItems('js')}
            className="flex items-center gap-1  group text-white w-fit px-4 py-2 my-2 rounded-md bg-gradient-to-r from-[#ad80b7] to-[#d779e7] cursor-pointer">
              <span>JavaScript</span>
              <IoLogoJavascript size={14} />
            </button>


            <button 
            onClick={()=>handelFilterItems('html')}
            className="flex items-center gap-1  group text-white w-fit px-4 py-2 my-2 rounded-md bg-gradient-to-r from-[#ad80b7] to-[#d779e7] cursor-pointer">
              <span>HtmlCss</span>
              <FaHtml5 size={14} />
              <FaCss3 size={14} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {items.map(({ id, src, demo, code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="image"
                  className="rounded-t-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a
                    href={demo}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    target="_blank"
                  >
                    Demo
                  </a>

                  <a
                    href={code}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
