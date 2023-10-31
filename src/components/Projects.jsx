import React from "react";
import ProjectItem from "./ProjectItem";
import CodeWarsImg from "../assets/Codewars.png";
import EventImg from "../assets/Event.png";
import GameHubImg from "../assets/Gamehub.png";
import TakeAway from "../assets/Takeaway.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias in
        necessitatibus temporibus ad accusantium consectetur libero id ratione!
        In, quae!
      </p>
      <div className=" grid sm:grid-cols-2 gap-12">
        <ProjectItem img={CodeWarsImg} title="CodeWars" />
        <ProjectItem img={EventImg} title="Event" />
        <ProjectItem img={GameHubImg} title="GameHub" />
        <ProjectItem img={TakeAway} title="TakeAway" />
      </div>
    </div>
  );
};

export default Projects;
