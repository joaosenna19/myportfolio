import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";
import Experience from "./Experience";

const Body = () => {
  return (
    <>
      <div className="flex flex-col lg:ml-10 lg:w-1/2 ">
        <About />
        <Experience/>
        <Education />
        <Projects />
        <Footer />
      </div>
    </>
  );
};
export default Body;
