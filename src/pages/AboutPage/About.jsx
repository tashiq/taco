import React, { useEffect, useRef } from "react";
import Qoutes from "./Qoutes";
import Journey from "./Journey";
import TextLine from "./TextLine";
import Gratitude from "./Gratitude";
import AboutBanner from "./AboutBanner";
const About = () => {
  const pathRef = useRef(null);
  const path2ref = useRef(null);
  useEffect(() => {
    const path = pathRef.current;

    const windowHeight = document.documentElement.clientHeight;
    const lineLength = path.getTotalLength();
    const coveredLength = lineLength - windowHeight;
    const curveFactor = 0.3;
    const curveFactor2 = 0.1;
    path.style.strokeDasharray = lineLength;
    path.style.strokeDashoffset = lineLength;
    const handleScrolling = () => {
      const scrollTop = window.scrollY - windowHeight;
      const progress = scrollTop / (coveredLength * curveFactor);
      path.style.strokeDashoffset = coveredLength * progress;
    };
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <div>
      <AboutBanner />
      <Qoutes />
      {/* <Panorama imageUrl="/office inside.png" /> */}

      <TextLine />
      <div className="relative w-full">
        <div className="absolute top-32 right-0 -z-100">
          <svg
            width="428"
            height="608"
            viewBox="0 0 428 608"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d="M509.951 596C509.951 596 424.451 585.5 303.23 550.467C226.641 528.333 272.042 452.284 362.451 374.456C451.298 297.973 62.0117 515.357 133.587 419C196.4 334.44 319.58 220.469 275.451 238.044C133.587 294.544 -28.0488 330.5 20.9512 284C20.9512 284 170.971 179.329 163.951 108.5C156.643 34.764 20.9512 12 20.9512 12"
              stroke="url(#paint0_linear_1452_1069)"
              stroke-width="23"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1452_1069"
                x1="-51.5489"
                y1="394.5"
                x2="511.451"
                y2="394.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5B89F4" />
                <stop offset="1" stop-color="#2F6FD4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Journey />
      <Gratitude />
    </div>
  );
};

export default About;
