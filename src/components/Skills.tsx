export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "NestJS",
    "NextJS",
    "MongoDB",
    "SQL",
    "Git",
    "Terraform",
    "AWS",
    "RESTful APIs",
    "Jest",
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
