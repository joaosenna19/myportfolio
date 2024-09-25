import linkedin from "./assets/icons8-linkedin.svg";
import github from "./assets/icons8-github.svg";
const Icons = () => {
  return (
    <ul className="mt-1 flex flex-row lg:mt-80">
      <li className="mr-3">
        <a
          href="https://github.com/joaosenna19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" width="24" height="24" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tony-radicchi-b17b05a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" width="24" height="24" />
        </a>
      </li>
    </ul>
  );
};

export default Icons;
