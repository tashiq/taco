import PropTypes from "prop-types";
import "../../styles/index.css";
import { useRef, useState } from "react";

const VentureCard = ({ key, src, text, subtext, cls, location }) => {
  const ref = useRef(null);
  const targetText = text;
  return (
    <a
      className={`w-[41vw]  overflow-hidden box-border ${cls} relative`}
      key={key}
      href={`/industry#${location}`}
    >
      <div>
        <div className="w-full h-[320px] rounded-lg text-center overflow-hidden">
          <img src={src} alt="Venture Image" srcset="" className="rounded-xl" />
        </div>
        <div className="pt-2 pl-4">
          <div className="text-md font-normal">{subtext}</div>
          <div className="text-2xl font-medium" ref={ref}>
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
