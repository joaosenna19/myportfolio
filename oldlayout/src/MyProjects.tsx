import React from "react";
import Stack from "./Stack";

interface MyProjectsProps {
  title: string;
  description: string;
  image: string;
  github: string;
  stack: string[];
}

const MyProjects: React.FC<MyProjectsProps> = ({
  title,
  description,
  image,
  github,
  stack,
}) => {
  return (
    <div className="mb-3">
      <h3 className="text-color hover:text-mygreen text-lg font-medium">
        <a href={github} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <h4 className="text-color text-justify text-sm font-light">
        {description}
      </h4>
      <div className="my-3 grid grid-cols-3 gap-4">
        <img
          src={image}
          alt=""
          className="col-span-2 h-auto w-full rounded-md object-fill"
        />
      </div>
      <div className="flex flex-row flex-wrap">
        {stack.map((tech, index) => (
          <Stack key={index} stack={tech} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
