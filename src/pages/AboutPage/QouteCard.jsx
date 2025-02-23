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
            <div className="flip-card-back flex flex-col h-full w-full  rounded-lg ">
              <div className="h-full rounded text-center">
                <div className="card-img w-full flex justify-center items-center">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="avatar w-full h-[240px]"
                  />
                </div>

                <div className="card-text p-3">
                  <div className="text-2xl position font-normal capitalize">
                    {designation}
                  </div>
                  <div className="author text-xl font-normal capitalize">
                    {name}
                  </div>
                  <div className="qoute flex justify-center items-center h-[80px]">
                    {backText}
                  </div>
                </div>

                {/* <img
                  src="/back.png"
                  className="absolute top-0 left-0 w-full h-full -z-10 opacity-15"
                /> */}
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
