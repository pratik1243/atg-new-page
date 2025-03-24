import React from "react";
import Stepper from "./Stepper";
import TextAnimateSection from "./TextAnimateSection";
import TextAnimateSection1 from "./TextAnimateSection2";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="left-content-sec">
        <TextAnimateSection />
        <TextAnimateSection1 />
        <Stepper />
      </div>
    </div>
  );
};

export default LeftPanel;
