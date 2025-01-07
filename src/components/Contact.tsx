import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-4">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <div className="flex space-x-4">
        <a
          href="mailto:joaoradicchi@gmail.com"
          className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/tony-radicchi-b17b05a9/"
          className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/joaosenna19/"
          className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
      </div>
    </section>
  );
}
