import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  website: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "OQ Digital",
    period: "May 2024 - Present",
    description: [
      "Contributes to backend development by fixing bugs, implementing new functionalities, and conducting comprehensive tests to enhance the robustness and efficiency of the codebase",
      "Completes assigned tasks in JIRA, adhering to project conventions for pull requests and ensuring code quality and consistency",
    ],
    website: "https://oqdigital.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 mr-2 text-gray-600" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <p className="text-gray-600 mb-2">
              <a
                href={exp.website}
                className="hover:text-mygreen"
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.company}
              </a>{" "}
              | {exp.period}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
