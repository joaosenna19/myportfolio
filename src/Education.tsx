import Program from "./Program";

const Education = () => {
  const education = [
    {
      program: "Software Development Diploma",
      uni: "Southern Alberta Institute of Technology",
      date: "Jan 2023 - Present",
      link: "https://www.sait.ca/programs-and-courses/diplomas/software-development",
    },
    {
      program: "Law Degree",
      uni: "Federal University of Minas Gerais",
      date: "Fev 2017 - Sep 2021",
      link: "https://ufmg.br/international-visitors",
    },
  ];
  return (
    <section className="mb-8 mt-5 flex flex-col">
      <h2 className="text-color mb-2 text-2xl font-bold">Education</h2>
      {education.map((edu, index) => (
        <Program
          key={index}
          program={edu.program}
          uni={edu.uni}
          date={edu.date}
          link={edu.link}
        />
      ))}
      <p className="text-color mt-2 font-medium">
        <a
          href="https://drive.google.com/file/d/1AVtGXDFPoW0Bl5rmc4kDtQjaebkTKsuC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mygreen"
        >
          View Full Resume
        </a>
      </p>
    </section>
  );
};

export default Education;
