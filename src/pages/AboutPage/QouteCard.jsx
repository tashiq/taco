import "../../styles/qoutes.css";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
const Card = forwardRef(
  ({ id, frontSrc, frontAlt, backText, name, designation, avatar }, ref) => {
    return (
      <div className="card" id={id} ref={ref}>
        <div className="card-wrapper">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt={frontAlt}
                priority
                src={frontSrc}
                className="qoute-back-img"
              />
            </div>
            <div className="flip-card-back flex flex-col h-full w-full p-2  rounded-lg">
              <div className="w-full h-3/12 flex justify-center items-center mb-3">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="avatar  rounded-full"
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <div className="card-text">
                <div className="author text-lg font-medium">{name}</div>
                <div className="position text-base font-normal mb-2">
                  {designation}
                </div>
                <div className="qoute">&quot;{backText}&quot;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";
Card.propTypes = {
  backText: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  frontAlt: PropTypes.string.isRequired,
  frontSrc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
