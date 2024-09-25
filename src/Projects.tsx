import MyProjects from "./MyProjects";
import payMaster from "./assets/paymaster.png";
import timber from "./assets/timber.png";
import mtg from "./assets/mtg.png";
import mtg20 from "./assets/mtg20.png";
import fencierapi from "./assets/fencierapi.png";
import fencierquote from "./assets/fencierquote.png";
import fencierportal from "./assets/fencierportal.png";

const Projects = () => {
  const projects = [
    {
      title: "Fencier Contractor Portal",
      description:
        "Frontend for my Capstone project Fencier, a platform that allows contractors to manage their quotes and jobs.",
      image: fencierportal,
      developmentDate: "Aug 2024",
      github: "https://github.com/joaosenna19/fencier-portal",
      stack: ["NextJS", "TailwindCSS", "React Hook Form"],
    },
    {
      title: "Fencier Quote Portal",
      description:
        "Frontend for my Capstone project Fencier, a platform that allows customer to get instant online quotes for a fence by drawing in a map.",
      image: fencierquote,
      developmentDate: "Aug 2024",
      github: "https://github.com/joaosenna19/fencier-quote",
      stack: ["NextJS", "TailwindCSS", "React Hook Form", "Google Maps API"],
    },

    {
      title: "Fencier API",
      description:
        "API for my Capstone project Fencier, a platform that allows customer to get instant online quotes for a fence by drawing in a map.",
      image: fencierapi,
      developmentDate: "Jun 2024",
      github: "https://github.com/joaosenna19/fencier-api",
      stack: ["NestJS", "Passport", "MongoDB", "PrismaORM", "AWS S3"],
    },
    {
      title: "Magic The Gathering Collection 2.0",
      description:
        "Enhanced full-stack project that allows Magic The Gathering players to register and keep track of their personal collection.",
      image: mtg20,
      developmentDate: "Mar 2024",
      github: "https://github.com/joaosenna19/magic-collection",
      stack: [
        "NextJS",
        "NextAuth",
        "MongoDB",
        "Zod",
        "React Hook Form",
        "PrismaORM",
      ],
    },
    {
      title: "Magic The Gathering Collection",
      description:
        "Full-stack project that allows Magic The Gathering players to register and keep track of their personal collection. The ideas was to learn more about authetication, API design, routing and CRUD operations.",
      image: mtg,
      developmentDate: "October 2023",
      github: "https://github.com/joaosenna19/MTGCollection",
      stack: [
        "React",
        "TailwindCSS",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "PrismaORM",
      ],
    },
    {
      title: "PayMaster",
      description:
        "Full-stack project that allows employers to register and keep track of their employees' hours and payments. Developed for a course at SAIT.",
      image: payMaster,
      developmentDate: "Jul 2023",
      github: "https://github.com/joaosenna19/PayMaster",
      stack: ["HTML", "Bootstrap", "C#", "Blazor", "Maui", "SQLite"],
    },
    {
      title: "Timber! Database",
      description:
        "Oracle SQL project emulating an online store backend, simulating key functionalities such as product management, order processing, and customer interactions. Developed for a course at SAIT alongside my colleagues Udey and Harry.",
      image: timber,
      developmentDate: "Aug 2023",
      github: "https://github.com/joaosenna19/timber-",
      stack: ["SQL", "Oracle"],
    },
  ];
  return (
    <section className="mb-8 mt-5 flex flex-col">
      <h2 className="text-color mb-2 text-2xl font-bold">Projects</h2>
      {projects.map((project, index) => (
        <MyProjects
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          github={project.github}
          stack={project.stack}
        />
      ))}
    </section>
  );
};

export default Projects;
