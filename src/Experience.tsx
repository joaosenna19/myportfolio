import Job from "./Job";

const Experience = () => {
  const experience = [
    {
      company: "OQ Digital",
      website: "https://oqdigital.com/",
      role: "Softare Development Intern",
      date: "May 2024 - Present",
      stack: ["NestJS", "TypeScript", "MongoDB", "Express"],
    },
  ];
  return (
    <section className="mb-8 mt-5 flex flex-col">
      <h2 className="text-color mb-2 text-2xl font-bold">Experience</h2>
      {experience.map((exp, index) => (
        <Job
          key={index}
          company={exp.company}
          website={exp.website}
          role={exp.role}
          stack={exp.stack}
          date={exp.date}
        />
      ))}
    </section>
  );
};

export default Experience;
