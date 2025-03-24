import React from "react";

const Slide5 = ({ ref }) => {
  return (
    <div
      id="section5"
      ref={(el) => (ref.current[5] = el)}
      className="slide slide-5"
    ></div>
  );
};

export default Slide5;
