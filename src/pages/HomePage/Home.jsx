import Banner from "./Banner";
import "../../styles/index.css";
import LineDraw from "./LineDraw";
import Services from "./Services";
import Venture from "./Venture";
import WhyUs from "./WhyUs";
import ThreeD from "./ThreeD";
const Home = () => {
  return (
    <div className="container  mx-auto">
      <Banner />
      <LineDraw />
      <Services />
      <Venture />
      <ThreeD />
      <WhyUs />
    </div>
  );
};

export default Home;
