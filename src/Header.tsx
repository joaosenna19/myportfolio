import Icons from "./Icons";
import "./LandingPage.css";

const Header = () => {
  return (
    <header className="text-color flex flex-col">
      <h1 className="font-bold text-4xl mb-2">Tony Radicchi</h1>
      <p className="mb-2 text-lg font-medium">Full Stack Web Developer</p>
      <p className="mb-2 text-base font-light">Aspiring Web Developer looking for his first opportunity</p>
      <Icons />
    </header>
  );
};

export default Header;
