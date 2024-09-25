import React from "react";

import { TitleHead } from "./common/TitleHead";

export const Experience = () => {
  const education = [
    {
      id: 1,
      year: "2021-2024 ",
      title: "Bachelor of Computer Application (MAKAUT) - [8.17 CGP]",
      description: "Completed my Graduation Degree",
    },
    {
      id: 2,
      year: "2020 - 2021",
      title: "Class 12 (ISC) - [88.0 percent]",
      description:
        "Completed school education with a focus on commerce and mathematics.",
    },
    {
      id: 3,
      year: "2018 - 2019",
      title: "Class 10 (ICSE) - [86.0 percent]",
      description:
        "Completed school education with a focus on commerce and mathematics.",
    },
  ];

  const exp = [
    {
      id: 1,
      year: "22/05/2023 - 22/10/2023",
      title: "Zealyug (Frontend Web Developer - Internship) ",
      description:
        "-I have worked as a Frontnend Developer.HTML , CSS , Javascript , Tailwind Css , Material UI , ReactJS.",
    },
    {
      id: 2,
      year: "20/03/2023 - 22/05/2023",
      title: "Zealyug (UI/UX Developer - Internship)",
      description:
        "-I have worked in Figma , canva to create, collaborate, prototype, and handoff.Figma , Canva.",
    },
    {
      id:3,
      year:"2023" ,
      title:"Colorsplash(Freelance WordPress Developer)",
      description:"-Managed and updated product listings for an e-commerce website using WordPress, ensuring website functionality and performance.",
    },
    {
      id:4,
      year:"2022-2023" ,
      title:"Snugkins(Freelance Frontend Developer)",
      description:"-Developed pregnancy calculators using HTML, CSS, Bootstrap, and JavaScript, ensuring functionality, responsiveness, and user-friendly interfaces across devices.",
    }
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full text-white ">
      <div className="grid md:grid-cols-2 gap-8 max-w-screen-lg p-4 mx-auto w-full h-full content-center">
        {/* <!-- Education Section Starts --> */}
        <div className="">

          <TitleHead title="Education" decription="Check out some of my work right here"/>

          <div className="space-y-5">
            {education.map(({ id, year, title, description }) => (
              <EducationCard
                key={id}
                year={year}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
        {/* <!-- Education Section Ends --> */}

        {/* <!-- Experience Section Starts --> */}
        <div>

          <TitleHead title="Experience" decription="Check out some of my work right here"/>

          <div className="space-y-5">
            {exp.map(({ id, year, title, description }) => (
              <ExperienceCard
                key={id}
                year={year}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
        {/* <!-- Experience Section Ends --> */}
      </div>
    </div>
  );
};

export const EducationCard = ({ id, year, title, description }) => {
  return (
    <div
      key={id}
      className="p-5 shadow-md shadow-[#06070A] rounded-lg duration-200 hover:scale-105 space-y-2   content-center bg-gray-500"
    >
      <h4 className="">{year}</h4>
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export const ExperienceCard = ({ id, year, title, description }) => {
  return (
    <div
      key={id}
      className="p-5 shadow-md shadow-[#06070A] rounded-lg duration-200 hover:scale-105 space-y-2  content-center bg-gray-500"
    >
      <h4 className="">{year}</h4>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};
