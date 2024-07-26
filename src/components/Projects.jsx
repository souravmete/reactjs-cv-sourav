import React from 'react'
import { TitleHead } from "./common/TitleHead";


import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

import onlineLearningPlatform from "../assets/portfolio/onlineLearningPlatform.png";

import portfolio from "../assets/portfolio/portfolioJs.png"

import weather from "../assets/portfolio/weatherJs.png"

import gradient from "../assets/portfolio/gradient.png"

import passwordGen from "../assets/password-generator-3.webp"


import reactWeather from '../assets/portfolio/reactWeatherapp.png'


export const Projects = () => {


    const projects = [
        {
          id: 1,
          src: reactWeather,
          demo:"https://weather-app-reactjs-orpin-five.vercel.app/",
          code:"https://github.com/souravmete/weather-app-reactjs"
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
          demo:"https://669973bb9dd1e04f30104ac1--wonderful-vacherin-5ca0a1.netlify.app/",
          code:"https://github.com/souravmete/Gradient-changer"
        },
        {
          id: 4,
          src: weather,
          demo:"https://weatherapp-html-js.netlify.app/",
          code:"https://github.com/souravmete/weather-app-js"
        },
        {
          id: 5,
          src: portfolio,
          demo:"https://portfolio-js-sourav.netlify.app/",
          code:"https://github.com/souravmete/portfolio"
        },
        {
          id: 6,
          src: onlineLearningPlatform,
          demo:"https://online-edu-platform.netlify.app/",
          code:"https://github.com/souravmete/onlineEducation.github.io"
        },
      ];

      

  return (
    <>
        <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        {/* title head */}

        <TitleHead title="Projects" decription="Check out some of my work right here"/>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="image"
                className="rounded-t-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href ={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank">
                  Demo
                </a>
                
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
