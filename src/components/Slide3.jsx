import React from "react";

const Slide3 = ({ ref }) => {
  return (
    <div
      id="section3"
      ref={(el) => (ref.current[3] = el)}
      className="slide slide-3"
    ></div>
  );
};

export default Slide3;
