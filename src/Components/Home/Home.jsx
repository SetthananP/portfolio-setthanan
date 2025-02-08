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
          I am recent Software Engineering graduate, skilled in Dart/Flutter,
          Frontend, UX/UI Design. My projects focus on mobile development using
          Flutter. I am interested to be considered for a full time Flutter
          Developer or Mobile Developer position
        </p>
      </div>
    </div>
  );
};

export default Home;
