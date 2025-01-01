import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "../../styles/qoutes.css";
import Card from "./QouteCard.jsx";

gsap.registerPlugin(ScrollTrigger);
const Qoutes = () => {
  const cardRef = useRef([]);
  const qouteContainerRef = useRef();
  const qouteData = [
    {
      name: "John Doe",
      designation: "CEO",
      avatar: "/avatar.png",
      qoute:
        "MM Seaways Ltd. is a trusted partner in logistics, freight forwarding, and global trade solutions, driving success across industries through innovation and excellence.",
    },
    {
      name: "Jane Doe",
      designation: "COO",
      avatar: "/avatar.png",
      qoute:
        "MM Seaways Ltd. is a trusted partner in logistics, freight forwarding, and global trade solutions, driving success across industries through innovation and excellence.",
    },
    {
      name: "John Doe",
      designation: "CEO",
      avatar: "/avatar.png",
      qoute:
        "MM Seaways Ltd. is a trusted partner in logistics, freight forwarding, and global trade solutions, driving success across industries through innovation and excellence.",
    },
    {
      name: "Jane Doe",
      designation: "COO",
      avatar: "/avatar.png",
      qoute:
        "MM Seaways Ltd. is a trusted partner in logistics, freight forwarding, and global trade solutions, driving success across industries through innovation and excellence.",
    },
    {
      name: "John Doe",
      designation: "CEO",
      avatar: "/avatar.png",
      qoute:
        "MM Seaways Ltd. is a trusted partner in logistics, freight forwarding, and global trade solutions, driving success across industries through innovation and excellence.",
    },
  ];
  useEffect(() => {
    const cards = cardRef.current;
    const totalScrollHeight = window.innerHeight * 3;
    const position = [10, 30, 50, 70, 90];
    const rotation = [-15, -7.5, 0, 7.5, 15];
    const ctx = gsap.context(() => {
      // Your GSAP animation
      ScrollTrigger.create({
        trigger: ".cards",
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });
      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${position[index]}%`,
          rotation: `${rotation[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: ".cards",
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");
        const straggerOffset = index * 0.05;
        const startOffset = 1 / 3 + straggerOffset;
        const endOffset = 2 / 3 + straggerOffset;
        ScrollTrigger.create({
          trigger: ".cards",
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress < endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotation[index] * (1 - animationProgress);
              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    }, qouteContainerRef);

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="about-container">
        <div className="about-banner-container">
          <div className="about-banner">
            <div className="about-content">
              <h1 className="about-banner-title">About Us</h1>
              <div className="about-banner-text">
                Discover MM Seaways Ltd.: your trusted partner in logistics,
                freight forwarding, and global trade solutions, driving success
                across industries through innovation and excellence.
              </div>
            </div>
          </div>
        </div>
        <div className="qoute-container">
          <h1 className="title text-7xl text-white font-medium ps-12">
            Governing Body
          </h1>
          <div className="qoute-card-container" ref={qouteContainerRef}>
            <div className="cards-container">
              <div className="cards">
                {qouteData.map((data, index) => (
                  <Card
                    key={index}
                    id={`card-${index + 1}`}
                    frontSrc="/back.png"
                    frontAlt="Card Image"
                    backText={data.qoute}
                    name={data.name}
                    avatar={data.avatar}
                    designation={data.designation}
                    ref={(el) => (cardRef.current[index] = el)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qoutes;
