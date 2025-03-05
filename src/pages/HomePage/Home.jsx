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
  const path3ref = useRef(null);
  const svg3ref = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    const path2 = path2ref.current;
    const path3 = path3ref.current;
    const windowHeight = document.documentElement.clientHeight;
    const lineLength = path.getTotalLength();
    const line2length = path2.getTotalLength();
    const line3length = path3.getTotalLength();
    const coveredLength = lineLength - windowHeight;
    const coveredLength2 = line2length - windowHeight;
    const coveredLength3 = line3length - windowHeight;
    const curveFactor = 0.3;
    path.style.strokeDasharray = lineLength;
    path.style.strokeDashoffset = lineLength;
    path2.style.strokeDasharray = line2length;
    path2.style.strokeDashoffset = line2length;
    path3.style.strokeDasharray = line3length;
    path3.style.strokeDashoffset = line3length;
    const handleScroll = () => {
      const scrollTop = window.scrollY - windowHeight;
      const progress = scrollTop / (coveredLength * curveFactor);
      const progress2 = (scrollTop * 1.8) / coveredLength2;
      const progress3 = scrollTop / coveredLength3;
      path.style.strokeDashoffset = coveredLength * (1 - progress);
      path2.style.strokeDashoffset = coveredLength2 * (1 - progress2);
      path3.style.strokeDashoffset = 8500 + progress3 * 3.7 * line3length;
    };
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("load", async () => {
      const images = document.querySelectorAll("img");
      const videos = document.querySelectorAll("video source");

      let mediaData = {
        images: {},
        videos: {},
      };

      // Convert images to Base64 and store them
      for (let img of images) {
        if (img.src) {
          mediaData.images[img.src] = await getBase64(img.src);
        }
      }

      // Convert videos to Base64 and store them
      for (let video of videos) {
        if (video.src) {
          mediaData.videos[video.src] = await getBase64(video.src);
        }
      }

      // Save in localStorage
      localStorage.setItem("mediaData", JSON.stringify(mediaData));
      console.log("Media stored in localStorage:", mediaData);
    });

    // Convert Image/Video to Base64
    async function getBase64(url) {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result);
      });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:px-16 md:px-12 sm:px-0 py-0 box-border mx-auto relative">
      <Banner />
      {/* <LineDraw /> */}
      <div className="line-container-wrapper">
        <div className="line-container -left-[60px]">
          <svg
            className="hidden lg:block"
            viewBox="0 0 1542 1683"
            fill="none"
            ref={svgRef}
          >
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
          <svg
            viewBox="0 0 488 3190"
            fill="none"
            ref={svg3ref}
            className="block lg:hidden"
          >
            <path
              ref={path3ref}
              d="M435.285 3185C226.785 2899.5 171.785 2943 171.785 2939C171.785 2935 78.2847 2958 76.7847 2996.5C75.2847 3035 158.285 3063 166.785 2996.5C175.285 2930 -121.716 2709.5 212.285 2508.5C546.285 2307.5 357.785 2153 268.785 2179C179.785 2205 101.785 2286 119.285 2331.5C136.785 2377 216.784 2404 238.785 2331.5C260.785 2259 37.9636 2217.8 56.2847 2106C74.1686 1996.87 334.285 1983 339.785 1936.5C345.284 1890 -38.7155 1824.5 25.7845 1750C90.2845 1675.5 339.785 1688.5 440.785 1553.5C541.785 1418.5 414.345 1347.74 327.784 1336C269.752 1328.13 179.783 1399.5 163.784 1457C158.374 1476.44 191.603 1506 211.784 1506C239.284 1506 261.858 1482.12 265.284 1457C269.649 1425 225.784 1402 225.784 1402C225.784 1402 133.784 1359 78.7837 1322.5C50.6727 1303.84 -53.2645 1226.5 72.2854 1226.5C157.284 1226.5 259.636 1194.03 344.785 1131.5C376.784 1108 396.821 1073.49 400.284 1042.5C405.616 994.775 399.539 962.208 373.284 922C357.049 897.138 301.785 798.5 301.785 798.5C301.785 798.5 140.285 595.5 55.2852 617C-29.7148 638.5 55.2852 776.5 110.285 722C165.285 667.5 321.285 309.5 410.785 458C500.285 606.5 247.285 289 55.2852 303.5C-136.715 318 341.784 160.5 376.285 129.5C410.785 98.5 15.2845 10 15.2845 10"
              stroke="url(#paint0_linear_1650_743)"
              strokeLinecap="round"
              strokeWidth="20"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1650_743"
                x1="244.822"
                y1="10"
                x2="244.822"
                y2="3291.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2361F0" />
                <stop offset="0.285" stopColor="#90A1C6" />
                <stop offset="0.65" stopColor="#1553E3" />
                <stop offset="0.94" stopColor="#6493FE" />
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
            className="hidden lg:block"
          >
            <path
              ref={path2ref}
              d="M987.5 16.5C987.5 16.5 330.738 119.856 330.738 257.956C330.738 396.056 632.621 524.429 826.054 695.173C1019.49 865.916 348.492 809.049 70.0722 935.189C-208.347 1061.33 680.192 1216.86 960 1536.5"
              stroke="url(#paint0_linear_822_495)"
              strokeLinecap="round"
              strokeWidth="20"
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
      <div className="relative w-[96vw] h-16">
        <button
          className="w-12 h-12 absolute bottom-6 right-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/go up.png" alt="" srcset="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
