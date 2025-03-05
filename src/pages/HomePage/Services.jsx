import "../../styles/index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const cardData = [
    {
      heading: "Feeder Service",
      src: "/ship.png",
      backSrc: "/bg_ship.png",
      location: "/services#feederage",
    },
    {
      heading: "Shipping Liner Agency",
      src: "/container.png",
      backSrc: "/bg_container.png",
      location: "/services#oceanline",
    },

    {
      heading: "Freight Forwarding",
      src: "/truck.png",
      backSrc: "/bg_truck.png",
      location: "/services#freight",
    },
    {
      heading: "Customs Clearance & Logistics",
      src: "/clear.png",
      backSrc: "/bg_clear.png",
      location: "/services#clear",
    },
  ];
  useEffect(() => {
    gsap.from(".service-letters", {
      yPercent: 100,
      stagger: 0.02,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".service-container",
        start: "top 97%",
        end: "top 0%",
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
    <div className="service-container mt-8 overflow-hidden px-4 lg:px-6 box-border">
      <h1
        className="service-title text-4xl lg:text-[4rem] font-medium uppercase py-4 lg:py-8"
        id="service-title"
      >
        <div className="inline-block font-normal service-letters">S</div>
        <div className="inline-block font-normal service-letters">E</div>
        <div className="inline-block font-normal service-letters">R</div>
        <div className="inline-block font-normal service-letters">V</div>
        <div className="inline-block font-normal service-letters">I</div>
        <div className="inline-block font-normal service-letters">C</div>
        <div className="inline-block font-normal service-letters">E</div>
        <div className="inline-block font-normal service-letters">S</div>
      </h1>
      <div className="flex flex-wrap justify-between gap-0 lg:gap-[2vw] box-border">
        {cardData.map((item, index) => (
          <ServiceCard
            key={index}
            text={item.heading}
            src={item.src}
            backSrc={item.backSrc}
            location={item.location}
            cls={`service-card${index}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ key, src, backSrc, text, alt, cls, location }) => {
  const thumbRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = thumbRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;

      imgRef.current.style.transform = `translate(${-x}px, ${-y}px)`;
    };

    const thumbElement = thumbRef.current;
    thumbElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      thumbElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <a
      className={`w-[45vw] lg:w-[40vw] overflow-hidden box-border ${cls} relative service-card`}
      key={key}
      href={location}
    >
      {/* <div> */}
      <div
        className="w-full h-[118px] lg:h-[320px] rounded-lg text-center overflow-hidden"
        style={{
          background: `url(${backSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        ref={thumbRef}
      >
        <img
          className="w-auto h-full my-0 mx-auto transition-transform duration-300 ease-in-out rounded-lg"
          src={src}
          alt="Service Images"
          srcset=""
          ref={imgRef}
        />
      </div>
      <div className="pl-0 lg:pl-4 pt-2">
        <div className="text-lg lg:text-2xl font-medium text-left">{text}</div>
      </div>
      {/* </div> */}
    </a>
  );
};
ServiceCard.propTypes = {
  key: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
  cls: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Services;
