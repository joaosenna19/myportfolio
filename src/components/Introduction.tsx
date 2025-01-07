import Image from "next/image";

export default function Introduction() {
  return (
    <section id="about" className="mb-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Tony Radicchi</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Software Engineer</h2>
          <p className="text-gray-700 mb-4 text-justify">
            I've been passionate about technology since 2002 when I started
            exploring the world of computers, particularly video games. Even
            back then, using a desktop with Windows 2000, I was already engaged
            in educational games like "Reader Rabbit." During adolescence, my
            interest expanded to programming, and for fun, I developed
            alternative servers for the game Ragnarok Online. Despite my love
            for technology, I chose to study law and worked in the legal field
            for 4 years, serving as a corporate advisor and participating in
            mergers and acquisitions. In 2021, during a work trip, I had the
            opportunity to sit down with developers and rediscover my passion
            for computing. Since then, I have dedicated myself to studying and
            acquiring qualifications to enter the technology industry. While my
            familiarity with JavaScript technologies is strong, I believe
            programming languages, libraries, and frameworks are tools to
            develop meaningful solutions for real-world problems. In 2023, I
            made the decision to move to Calgary, where I am starting over my
            professional path. Besides my passion for programming, I also enjoy
            activities such as playing tennis, Magic The Gathering and reading
            fantasy books in my free time.
          </p>
          <a
            href="/resume.pdf"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
