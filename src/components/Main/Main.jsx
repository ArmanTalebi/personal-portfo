import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import "./Main.css";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover opacity-70"
        src="/src/assets/Main.jpg"
        alt="Main"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/0">
        <div className="max-w-[750px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-600">
            I'm Arman Talebi
          </h1>
          <h2 className="flex sm:text-3xl text-xl pt-4 text-gray-700">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-end Developer",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech & Ai enthusiast",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-5 max-w-[260px] w-full">
            <AiFillLinkedin className="cursor-pointer" size={25} />
            <SiVercel className="cursor-pointer" size={25} />
            <BsGithub className="cursor-pointer" size={25} />
            <FaInstagram className="cursor-pointer" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
