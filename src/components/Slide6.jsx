import React from "react";

const Slide6 = ({ ref }) => {
  return (
    <div
      id="section6"
      ref={(el) => (ref.current[6] = el)}
      className="slide slide-6"
    ></div>
  );
};

export default Slide6;
