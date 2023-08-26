import React from "react";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]"
        src="/src/assets/Main.jpg"
        alt="Main"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/0">
        <div className="">
          <h1>I'm Arman Talebi</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
