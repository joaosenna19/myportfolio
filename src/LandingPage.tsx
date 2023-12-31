import Body from "./Body";
import Header from "./Header";

const LandingPage = () => {
  return (
    <>
      <div className="mx-5">
        <div className="my-5 flex-col p-5 lg:grid lg:grid-cols-2 lg:flex-row">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
