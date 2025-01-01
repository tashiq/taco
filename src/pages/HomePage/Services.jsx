import "../../styles/index.css";
import "../../styles/home_services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ShaderImageEffect from "./ShaderImage";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const cardData = [
    {
      heading: "Feeder Service",
      src: "/ship.png",
      backSrc: "/bg_ship.png",
    },
    {
      heading: "Shipping Liner Agency",
      src: "/container.png",
      backSrc: "/bg_container.png",
    },

    {
      heading: "Freight Forwarding",
      src: "/truck.png",
      backSrc: "/bg_truck.png",
    },
    {
      heading: "Customs Clearance & Logistics",
      src: "/clear.png",
      backSrc: "/bg_clear.png",
    },
  ];
  useEffect(() => {
    gsap.from(".service-letters", {
      yPercent: 100,
      stagger: 0.02,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".service-letters",
        start: "top 80%",
        end: "top top",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".service-card0", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".service-card0",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".service-card1", {
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".service-card1",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".service-card2", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".service-card2",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
    gsap.from(".service-card3", {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".service-card3",
        start: "top 95%",
        end: "bottom 5%",
        toggleActions: "play reverse play reverse ",
      },
    });
  }, []);
  return (
    <div className="service-container container">
      <h1 className="service-title title" id="service-title">
        <div className="service-letters">S</div>
        <div className="service-letters">E</div>
        <div className="service-letters">R</div>
        <div className="service-letters">V</div>
        <div className="service-letters">I</div>
        <div className="service-letters">C</div>
        <div className="service-letters">E</div>
        <div className="service-letters">S</div>
      </h1>
      <div className="service-card-container">
        {cardData.map((item, index) => (
          <ServiceCard
            key={index}
            text={item.heading}
            src={item.src}
            backSrc={item.backSrc}
            cls={
              index % 2
                ? "right" + ` service-card${index}`
                : "left" + ` service-card${index}`
            }
          />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ key, src, backSrc, text, alt, cls }) => {
  const thumbRef = useRef(null);
  // const imgRef = useRef(null);
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const rect = thumbRef.current.getBoundingClientRect();
  //     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
  //     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;

  //     imgRef.current.style.transform = `translate(${-x}px, ${-y}px)`;
  //   };

  //   const thumbElement = thumbRef.current;
  //   thumbElement.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     thumbElement.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  return (
    <div className={`service-card ${cls} relative`} key={key}>
      <div
        className="service-card-thumb"
        style={{
          background: `url(${backSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        ref={thumbRef}
      >
        <ShaderImageEffect width="100%" height="400px" imageSrc={src} />
      </div>
      <div className="service-card-content">
        <div className="service-card-title">{text}</div>
      </div>
      <div className="rounded-full bg-white absolute hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Explore
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  key: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
  cls: PropTypes.string.isRequired,
};

export default Services;
