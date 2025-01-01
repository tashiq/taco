import "../../styles/index.css";
import "../../styles/linedraw.css";
import { useEffect, useRef } from "react";
const LineDraw = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    const windowHeight = document.documentElement.clientHeight;
    const lineLength = path.getTotalLength();
    const coveredLength = lineLength - windowHeight;
    // svg.style.height = coveredLength;
    const curveFactor = 0.3;
    path.style.strokeDasharray = lineLength;
    path.style.strokeDashoffset = lineLength;
    const handleScroll = () => {
      const scrollTop = window.scrollY - windowHeight;
      const progress = scrollTop / (coveredLength * curveFactor);
      path.style.strokeDashoffset = coveredLength * (1 - progress);
    };
    if (window.scrollY > windowHeight / 2) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="line-container-wrapper">
      <div className="line-container">
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
        {/* <svg viewBox="0 0 265 3838" fill="none" ref={svgRef}>
          <path
            ref={pathRef}
            d="M36.0001 9C107.167 45.3333 247.1 133.3 237.5 194.5C225.5 271 181 259 36.0001 400C-109 541 197 589.5 237.5 662C278 734.5 132.5 758.5 36.0001 887.5C-60.5 1016.5 157 1037.5 237.5 1097.5C318 1157.5 96.5002 1286.5 36.0001 1343C-24.5 1399.5 201 1488.5 237.5 1565C274 1641.5 36.0001 1722 36.0001 1786.5C36.0001 1851 237.5 1920 237.5 1972C237.5 2024 36.0001 2100.5 36.0001 2149C36.0001 2197.5 237.5 2266 237.5 2334.5C237.5 2403 36.0001 2500 36.0001 2528C36.0001 2556 237.5 2697 237.5 2737.5C237.5 2778 36.0001 2858 36.0001 2894.5C36.0001 2931 237.5 2996 237.5 3048C237.5 3100 36.0001 3152.5 36.0001 3213C36.0001 3273.5 237.5 3297.5 237.5 3342C237.5 3386.5 36.0001 3454.5 36.0001 3499C36.0001 3543.5 237.5 3648.5 237.5 3672.5C237.5 3691.7 103.167 3785.17 36.0001 3829.5"
            stroke="url(#paint0_linear_23_3)"
            strokeWidth="20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_23_3"
              x1="126.091"
              y1="9"
              x2="126.091"
              y2="3829.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.11" stopColor="#F891F1" />
              <stop offset="0.315" stopColor="#B397A4" />
              <stop offset="0.595" stopColor="#8C252E" />
              <stop offset="0.775" stopColor="#8A2A1F" />
              <stop offset="1" stopColor="#88310B" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </div>
  );
};

export default LineDraw;
