import React from "react";

interface ProgramProps {
  program: string;
  uni: string;
  date: string;
  link: string;
}

const Program: React.FC<ProgramProps> = ({ program, uni, date, link }) => {
  return (
    <div className="mb-3">
      <h3 className="text-color text-lg font-medium">{program}</h3>
      <h4 className="text-color text-sm font-light">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mygreen"
        >
          {uni}
        </a>
      </h4>
      <p className="text-color text-justify text-sm font-extralight">{date}</p>
    </div>
  );
};

export default Program;
