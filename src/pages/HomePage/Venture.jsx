import VentureCard from "./VentureCard";
import "../../styles/index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const Venture = () => {
  const cardData = [
    {
      subHeading: "One-stop industrial solutions",
      heading: "Industrial Solutions",
      location: "industries",
      img: "/ventures/Industrial Solutions.jpg",
    },
    {
      subHeading: "Import • Export • Trade",
      heading: "Fisheries",
      location: "fisheries",
      img: "/ventures/Fisheries.jpg",
    },
    {
      subHeading: "Connecting the Country",
      heading: "Logistic Services",
      location: "logistic",
      img: "/ventures/Logistics Services.jpg",
    },
    {
      subHeading: "New • Reconditioned • Pre-owned",
      heading: "Automobile Dealerships",
      location: "automobile",
      img: "/ventures/Automobile Dealership.jpg",
    },
    {
      subHeading: "One-stop industrial solutions",
      heading: "Real Estate",
      location: "real-estate",
      img: "/ventures/Real Estate.jpg",
    },
    {
      subHeading: "Leading Power Generation with Excellence",
      heading: "Power & Energy",
      location: "power",
      img: "/ventures/Power & Energy.jpg",
    },
    {
      subHeading: "One-stop industrial solutions",
      heading: "Investment",
      location: "investment",
      img: "/ventures/Investment.jpg",
    },
    {
      subHeading: "Leading Power Generation with Excellence",
      heading: "Software Solutions",
      location: "software",
      img: "/ventures/Software Solutions.jpg",
    },
  ];
  useEffect(() => {
    gsap.from(".letters", {
      yPercent: 100,
      stagger: 0.02,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".letters",
        start: "top 88%",
        end: "top 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card0", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card0",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card1", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card1",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card2", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card2",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card3", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card3",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card4", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card4",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card5", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card5",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card6", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card6",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".card7", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".card7",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
  }, []);
  return (
    <div className="venture-container mt-8 overflow-hidden px-4 lg:px-6 box-border">
      <h1
        className="venture-title  text-4xl lg:text-[4rem] font-medium uppercase py-4 lg:py-8"
        id="venture-title"
      >
        <span className="letters inline-block font-normal">Industry</span>
        <span className="letters inline-block font-normal w-[15px] lg:w-[20px]">
          {" "}
        </span>
        <span className="letters inline-block font-normal">Edge</span>
      </h1>
      <div className="flex flex-wrap justify-between gap-0 lg:gap-[2vw] box-border">
        {cardData.map((item, index) => (
          <VentureCard
            key={index}
            location={item.location}
            text={item.heading}
            subtext={item.subHeading}
            src={item.img}
            cls={`card${index}`}
            // cls={
            //   index % 2 ? "right" + ` card${index}` : "left" + ` card${index}`
            // }
          />
        ))}
      </div>
    </div>
  );
};

export default Venture;
