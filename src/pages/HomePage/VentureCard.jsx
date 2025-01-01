import PropTypes from "prop-types";
import "../../styles/index.css";
import "../../styles/venture.css";
import { useEffect, useRef, useState } from "react";
import ShaderImageEffect from "./ShaderImage";

const VentureCard = ({ key, src, text, subtext, alt, cls }) => {
  const [showText, setShowText] = useState("");
  const ref = useRef(null);
  const targetText = text;
  const [index, setIndex] = useState(0);

  return (
    <div className={`venture-card ${cls}`} key={key}>
      <div className="venture-card-thumb">
        <ShaderImageEffect imageSrc={src} width="100%" height="100%" />
      </div>
      <div className="venture-card-content">
        <div className="venture-card-subtitle">{subtext}</div>
        <div className="venture-card-title" ref={ref}>
          {text}
        </div>
      </div>
    </div>
  );
};
VentureCard.propTypes = {
  key: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};

export default VentureCard;
