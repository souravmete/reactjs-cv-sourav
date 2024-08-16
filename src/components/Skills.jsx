import React from 'react'

import { TitleHead } from "./common/TitleHead";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import canva from "../assets/canva.png"
import tailwind from "../assets/tailwind.png";
import figma from '../assets/figma.png'

export const Skills = () => {

    const skills = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-[#5B4282]",
        },
        {
          id:7,
          src:canva,
          title: "Canva",
          style: "shadow-[#5A32FA]"
        },
        {
          id:8,
          src : figma,
          title:"Figma",
          style:"shadow-[#DE6355]"

        },
        {
          id: 9,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];

  return (
    <>
        <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        {/* title head */}

        <TitleHead title="Skills" decription="These are the technologies I've worked with"/>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
