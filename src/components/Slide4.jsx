import React from "react";

const Slide4 = ({ ref }) => {
  return (
    <div
      id="section4"
      ref={(el) => (ref.current[4] = el)}
      className="slide slide-4"
    ></div>
  );
};

export default Slide4;
