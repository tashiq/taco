import Banner from "./Banner";
import "../../styles/index.css";
import Services from "./Services";
import Venture from "./Venture";
import WhyUs from "./WhyUs";
import ThreeD from "./ThreeD";
import Reel from "./Reel";
import "../../styles/linedraw.css";
import { useEffect, useRef } from "react";
const Home = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const path2ref = useRef(null);
  const svg2ref = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    const path2 = path2ref.current;

    const windowHeight = document.documentElement.clientHeight;
    const lineLength = path.getTotalLength();
    const line2length = path2.getTotalLength();
    const coveredLength = lineLength - windowHeight;
    const coveredLength2 = line2length - windowHeight;
    const curveFactor = 0.3;
    const curveFactor2 = 0.1;
    path.style.strokeDasharray = lineLength;
    path.style.strokeDashoffset = lineLength;
    path2.style.strokeDasharray = line2length;
    path2.style.strokeDashoffset = line2length;
    const handleScroll = () => {
      const scrollTop = window.scrollY - windowHeight;
      const progress = scrollTop / (coveredLength * curveFactor);
      const progress2 = (scrollTop * 1.8) / coveredLength2;
      path.style.strokeDashoffset = coveredLength * (1 - progress);
      path2.style.strokeDashoffset = coveredLength2 * (1 - progress2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:px-16 md:px-12 sm:px-0 py-0 box-border mx-auto">
      <Banner />
      {/* <LineDraw /> */}
      <div className="line-container-wrapper">
        <div className="line-container -left-[60px]">
          <svg viewBox="0 0 1542 1683" fill="none" ref={svgRef}>
            <path
              ref={pathRef}
              d="M6 20C6 20 559.5 172.5 453 285.5C358.211 386.075 249 407.5 137 501C-87.5447 688.455 884.563 545.595 854 836.5C830.602 1059.21 184.206 1096.57 393 1177.5C635.5 1271.5 737.174 1275.85 793 1348C846 1416.5 864.873 1487.01 802.5 1533C743.5 1576.5 671 1513.5 689 1451C732.147 1301.18 939.5 1219 1135.5 1348C1331.5 1477 1527.5 1668 1527.5 1668"
              stroke="url(#paint0_linear_422_221)"
              strokeLinecap="round"
              strokeWidth="30"
            />
            <defs>
              <linearGradient
                id="paint0_linear_422_221"
                x1="751.5"
                y1="20"
                x2="751.5"
                y2="1680.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2965F1" />
                <stop offset="0.219" stopColor="#499BEB" />
                <stop offset="0.519" stopColor="#65B0FC" />
                <stop offset="0.784" stopColor="#4E87E5" />
                <stop offset="1" stopColor="#2965F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Reel />
      <Services />
      <div className="line-container-wrapper">
        <div className="line-container">
          <svg
            ref={svg2ref}
            // viewBox="0 0 945 1548"
            viewBox="0 0 1000 1548"
            fill="none"
          >
            <path
              ref={path2ref}
              d="M987.5 16.5C987.5 16.5 330.738 119.856 330.738 257.956C330.738 396.056 632.621 524.429 826.054 695.173C1019.49 865.916 348.492 809.049 70.0722 935.189C-208.347 1061.33 680.192 1216.86 960 1536.5"
              stroke="url(#paint0_linear_822_495)"
              strokeWidth="32"
            />
            <defs>
              <linearGradient
                id="paint0_linear_822_495"
                x1="485.272"
                y1="-3.16819"
                x2="485.272"
                y2="1340.44"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2160F1" />
                <stop offset="0.547616" stopColor="#3271CE" />
                <stop offset="0.965" stopColor="#2F6FD4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Venture />
      <ThreeD />
      <WhyUs />
      {/* <div className="">
        <button className="w-15 h-15">
          <img src="/go up.png" alt="" srcset="" />
        </button>
      </div> */}
    </div>
  );
};

export default Home;
