import React, { useState } from "react";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import "./SideNav.css";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    // for when click on menu it will be show the another parts of navbar
    setNav(!nav);
  };
  return (
    <div>
      <label className="hamburger cursor-pointer">
        <input className="hidden" type="checkbox" />
        <svg
          className="h-8 transform 600 cubic-bezier(0.4, 0, 0.2, 1)"
          viewBox="0 0 32 32"
        >
          <path
            class="line line-top-bottom fill-none	stroke-white"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path class="line fill-none	stroke-white" d="M7 16 27 16"></path>
        </svg>
      </label>
      {nav ? (
        <div className="fixed w-full h-screen bg-white/30 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-2">Home</span>
          </a>
          <a
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-2">Work</span>
          </a>
          <a
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-2">Projects</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-2">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-2">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ml-3">
          <a
            href="#main"
            className="rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-sm bg-gray-400 shadow-gray-600 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
