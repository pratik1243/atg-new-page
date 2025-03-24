import React from "react";

const Slide7 = ({ ref }) => {
  return (
    <div
      ref={(el) => (ref.current[7] = el)}
      id="section7"
      className="slide slide-7"
    ></div>
  );
};

export default Slide7;
