import { use, useEffect } from "react";
import "../../styles/index.css";
import React, { useRef } from "react";
// import Scene from "./Scene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Reel = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to(".reel-inner", {
        width: "100%",
        height: "70vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".reel-inner",
          start: "top center",
          end: "top 20%",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div className="lg:px-6 px-4 pt-2 md:4 lg:pt-6 reel-container mx-auto">
      <h1 className="text-4xl lg:text-[4rem] font-normal lg:font-medium mt-2 lg:mt-4 lg:translate-x-24 lg:mb-6 mb-1">
        Above standards
      </h1>
      <h1 className="text-4xl lg:text-[4rem] font-normal lg:font-medium mb-2">
        Within Reach
      </h1>
      <div class="grid grid-cols-12">
        <div class="lg:col-span-6 lg:col-start-7 col-span-12 sm:pt-5">
          –MM SEAWAYS LTD streamlines global trade with expert Non-Vessel
          Operating Common Carrier (NVOCC) services. Backed by innovative
          logistics and a passionate team, we deliver seamless cargo solutions,
          ensuring reliability, precision, and success across international
          shipping routes
        </div>
      </div>

      <div className="w-full mt-2 lg:mt-10 lg:h-[70vh]">
        <div className="w-full lg:w-1/3 h-auto lg:h-[200px] reel-inner overflow-hidden rounded-lg">
          <video
            src="/reel.mp4"
            className="rounded-lg"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Reel;
