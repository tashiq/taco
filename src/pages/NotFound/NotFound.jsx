import gsap from "gsap";
import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".error-404", {
      delay: 2,
      duration: 0.5,
      y: -140,
      ease: "power1.inOut",
    });
    tl.to(".error-404", {
      delay: 1,
      y: -280,
      duration: 0.5,
    });
  });
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="h-[140px] overflow-hidden">
        <div className="error-404">
          <div className="h-[140px] flex justify-center items-center">
            <img className="ship" src="/not_found1.png" alt="" />
          </div>
          <div>
            <img className="shipbroken" src="/not_found2.png" alt="" />
          </div>
          <div>
            <img className="text" src="/not_found3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
