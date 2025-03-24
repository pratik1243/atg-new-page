import React from "react";

const Slide2 = ({ ref }) => {
  return (
    <div
      ref={(el) => (ref.current[2] = el)}
      id="section2"
      className="slide slide-2"
    ></div>
  );
};

export default Slide2;
