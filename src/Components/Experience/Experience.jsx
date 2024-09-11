import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiC, SiFlutter } from "react-icons/si";
import RabbitLogoImg from "../../assets/rabbitLogo.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="grid grid-cols-3 gap-5 md:w-2/5 md:p-12 py-10 justify-items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <SiFlutter color="#02569B" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img className="md:w-20" src={RabbitLogoImg} alt="RabbitLogo img" />
          <span className="text-white ">
            <h2 className="leading-tight">Frontend Developer, Rabbit Group</h2>
            <p className="text-sm leading-tight font-thin">
              1 June - 31 July 2023
            </p>
            <ul className="text-sm p-2">
              <li>
                - fetched data from backend APIs and displayed it on both
                Android and iOS applications.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
