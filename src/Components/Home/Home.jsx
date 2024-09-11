import React from "react";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <br />
        <p className="text-sm md:text-2xl tracking-tight">
          I've just graduated in Software Engineering with a strong interest in
          Front-end Development. I'm really excited to start working and to put
          my skills to use in helping companies grow and succeed. I can't wait
          to get started and be part of a great team!
        </p>
      </div>
    </div>
  );
};

export default Home;
