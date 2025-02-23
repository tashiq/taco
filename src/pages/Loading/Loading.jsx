import { useRef } from "react";
import "../../styles/loading.css";
import { useEffect } from "react";
import gsap from "gsap";
const Loading = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      gsap.to(path1Ref.current, {
        x: -1000,
        y: -1000,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(path2Ref.current, {
        x: 1000,
        y: -1000,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(path3Ref.current, {
        x: 0,
        y: 1000,
        duration: 0.5,
        ease: "power2.out",
      });
    }, 1000);
  }, []);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative h-screen w-full loading-spinner">
        <div className="spinner"></div>
        <img className="loading-logo relativ z-2" src="/black_logo.png" />
        <div className="absolute -z-10 top-0 left-1">
          <svg>
            <path
              ref={path1Ref}
              d="M84.7151 1.16919C49.0959 0.0414066 17.722 21.5495 6.94579 51.0799C-1.89901 73.5977 -0.859204 91.6121 10.591 115.131L84.7151 1.16919Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
            />
            <path
              ref={path2Ref}
              d="M82.7155 1.29241C115.898 0.168389 146.628 21.841 156.67 51.3741C164.408 74.1302 163.215 92.1303 152.715 115.792L118.749 58.4405L82.7155 1.29241Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
            />
            <path
              ref={path3Ref}
              d="M11.716 118.014C31.1816 151.131 64.1817 164.131 95.717 159.014C120.925 154.923 141.08 139.283 153.217 115.014C153.217 115.014 109.028 127.471 81.2379 119.076C53.4479 110.682 11.716 118.014 11.716 118.014Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
