import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: " front-end developer (Yanus.ai)",
    duration: "Till now",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro ullam non quibusdam autem recusandae delectus tempora asperiores, laudantium minima?",
  },
  {
    year: 2023,
    title: " front-end developer",
    duration: "1 Month",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro ullam non quibusdam autem recusandae delectus tempora asperiores, laudantium minima?",
  },
  {
    year: 2023,
    title: " Internship front-end developer & Designer",
    duration: "6 Months",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro ullam non quibusdam autem recusandae delectus tempora asperiores, laudantium minima?",
  },
  {
    year: 2022,
    title: " Internship front-end developer",
    duration: "4 Months",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro ullam non quibusdam autem recusandae delectus tempora asperiores, laudantium minima?",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-semibold text-center text-[#001b5e]">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
