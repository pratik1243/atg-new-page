import React from "react";

const Slide1 = ({ ref }) => {
  return (
    <div
      id="section1"
      ref={(el) => (ref.current[1] = el)}
      className="slide slide-1"
    >  
    </div>
  );
};

export default Slide1;
