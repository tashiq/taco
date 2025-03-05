import PropTypes from "prop-types";
import "../../styles/index.css";
import { useRef, useState } from "react";

const VentureCard = ({ key, src, text, subtext, cls, location }) => {
  const ref = useRef(null);
  const targetText = text;
  return (
    <a
      className={`w-[45vw] lg:w-[40vw]  overflow-hidden box-border ${cls} relative`}
      key={key}
      href={`/industry#${location}`}
    >
      <div className="w-full">
        <div className="w-full h-[118px] lg:h-[320px] rounded-lg text-center overflow-hidden">
          <img
            src={src}
            className="h-full text-4xl lg:text-[4rem] font-medium uppercase rounded-lg"
            alt="Venture Image"
            srcset=""
          />
        </div>
        <div className="pt-2 pl-0 lg:pl-4">
          <div className="text-xs lg:text-md font-normal">{subtext}</div>
          <div className="text-md lg:text-2xl font-medium" ref={ref}>
            {text}
          </div>
        </div>
      </div>
    </a>
  );
};
VentureCard.propTypes = {
  key: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default VentureCard;
