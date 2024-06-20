import React from "react";
import Stack from "./Stack";

interface JobProps {
  company: string;
  website: string;
  role: string;
  date: string;
  stack: string[];
}

const Job: React.FC<JobProps> = ({ company, website, role, date, stack }) => {
  return (
    <div className="mb-3">
      <h3 className="text-color text-lg font-medium">
        <a
          href={website}
          className="hover:text-mygreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
      </h3>
      <h4 className="text-color text-lg font-medium">{role}</h4>

      <p className="text-color text-justify text-sm font-extralight">{date}</p>
      <div className="flex flex-row flex-wrap">
        {stack.map((tech, index) => (
          <Stack key={index} stack={tech} />
        ))}
      </div>
    </div>
  );
};

export default Job;
