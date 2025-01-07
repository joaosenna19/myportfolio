import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Fencier Contractor Portal",
      description:
        "Frontend for my Capstone project Fencier, a platform that allows contractors to manage their quotes and jobs.",
      image: "/fencierportal.png",
      link: "https://github.com/joaosenna19/fencier-portal",
    },
    {
      title: "Fencier Quote Portal",
      description:
        "Frontend for my Capstone project Fencier, a platform that allows customer to get instant online quotes for a fence by drawing in a map.",
      image: "/fencierquote.png",
      link: "https://github.com/joaosenna19/fencier-quote",
    },
    {
      title: "Fencier API",
      description:
        "API for my Capstone project Fencier, a platform that allows customer to get instant online quotes for a fence by drawing in a map.",
      image: "/fencierapi.png",
      link: "https://github.com/joaosenna19/fencier-api",
    },
    {
      title: "Magic The Gathering Collection 2.0",
      description:
        "Enhanced full-stack project that allows Magic The Gathering players to register and keep track of their personal collection.",
      image: "/mtg20.png",
      link: "https://github.com/joaosenna19/MTGCollection",
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
