import Icons from "./Icons";
import "./LandingPage.css";

const Header = () => {
  return (
    <header className="text-color  flex  flex-col lg:sticky lg:top-0 lg:ml-32 lg:mt-5 lg:max-h-screen lg:w-1/2 xl:ml-80">
      <h1 className=" mb-2 text-4xl font-extrabold">Tony Radicchi</h1>
      <p className="mb-2 text-lg font-medium">Software Developer</p>
      <p className="mb-2 text-base font-light">
        Passionate Software Developer looking for his first opportunity
      </p>
      <Icons />
    </header>
  );
};

export default Header;
