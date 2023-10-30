import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xlg group hover:bg-gradient-to-r from-gray-200 to-{#001be5}">
      <img src={img} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top{50%] left{50%} translate-x-{-50%} translate-y-{-50%}">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ProjectItem;
