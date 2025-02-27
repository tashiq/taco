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
      name: "mominur rahman",
      designation: "Chairman",
      avatar: "/momin.jpg",
      qoute:
        "Nothing beats  value and establishment. Hiking uphill the abyss of my career I've never seen hard work go unpaid.",
    },

    {
      name: "Ishak Uddin Jashim",
      designation: "Managing Director",
      avatar: "/avatar.png",
      qoute:
        "Experience stands out most to me. The longest ladder to success is business, and its most crucial stepping stone is experience.",
    },
    {
      name: "Hasnat Alam Mazumder",
      designation: "CEO",
      avatar: "/avatar.png",
      qoute:
        "Let's be honest, the underlying faucets that control the entire flow of a business are connections. Socializing is a powerful asset.",
    },
    {
      name: "ahmed nayeem uddin",
      designation: "COO",
      avatar: "/nayeem.png",
      qoute:
        "Luck sure is a mouthful. But my secret sauce has always been total obliteration of procrastination. Nothing beats that.",
    },

    {
      name: "Shahriar Rahman",
      designation: "CTO",
      avatar: "/inan.png",
      qoute: "JUST A TECH GUY.",
    },
  ];
  useEffect(() => {
    const mm = gsap.matchMedia();
    const cards = cardRef.current;
    const totalScrollHeight = window.innerHeight * 3;
    const position = [10, 30, 50, 70, 90];
    const rotation = [-15, -7.5, 0, 7.5, 15];
    mm.add("(min-width:768px)", () => {
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
                gsap.to(frontEl, {
                  rotateY: frontRotation,
                  ease: "power1.out",
                });
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
    });
  }, []);
  return (
    <>
      <section className="about-container border border-black">
        <div className="qoute-container">
          <h1 className="text-3xl lg:text-7xl text-white font-normal  text-center pt-6 mb-12 lg:mb-0">
            Board of Directors
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
