import React from "react";
import AboutImg from "../../assets/mypic.png";
const About = () => {
  return (
    <div id="About" className="id='Projects' text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-warp flex-col md:flex-row items-center">
            <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
                
              <span className="w-96 ">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  A little bit about myself.
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Recent Software Engineering graduate, skilled in frontend,
                  flutter and ux/ui design. Experience in multiple projects and
                  an internship in front-end developer for Bangkok Smartcard
                  System Company Limited. I am able to collaborate with others,
                  listen to others' opinions, be a good follower and leader when
                  necessary and communication skills in innovative projects
                  within your organization.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
