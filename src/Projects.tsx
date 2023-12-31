import MyProjects from "./MyProjects";
import payMaster from "./assets/paymaster.png";
import timber from "./assets/timber.png";
import mtg from "./assets/mtg.png";

const Projects = () => {
  const projects = [
    {
      title: "Magic The Gathering Collection",
      description:
        "Full-stack project that allows Magic The Gathering players to register and keep track of their personal collection. The ideas was to learn more about authetication, API design, routing and CRUD operations.",
      image: mtg,
      developmentDate: "October 2023",
      github: "https://github.com/joaosenna19/MTGCollection",
      stack: [
        "React",
        "JavaScript",
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
