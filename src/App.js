import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import AnimateSection from "./components/AnimateSection";
import LeftPanel from "./components/LeftPanel";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";

export const AnimateContext = createContext();

function App() {
  const sectionRef = useRef([]);
  const elementRef = useRef(null);
  const [stepsArr, setStepsArr] = useState([1]);
  const [activeSection, setActiveSection] = useState(1);
  const [removeSection, setRemoveSection] = useState();
  const [removeSection1, setRemoveSection1] = useState();
  const [removeSection2, setRemoveSection2] = useState();
  const [removeSection3, setRemoveSection3] = useState();
  const [removeSection4, setRemoveSection4] = useState();
  const [removeSection5, setRemoveSection5] = useState();
  const [removeSection6, setRemoveSection6] = useState();

  const onSrcollElement = () => {
    const section1Position1 = sectionRef.current[1]?.getBoundingClientRect().top;
    const section1Position2 = sectionRef.current[2]?.getBoundingClientRect().top;
    const section1Position3 = sectionRef.current[3]?.getBoundingClientRect().top;
    const section1Position4 = sectionRef.current[4]?.getBoundingClientRect().top;
    const section1Position5 = sectionRef.current[5]?.getBoundingClientRect().top;
    const section1Position6 = sectionRef.current[6]?.getBoundingClientRect().top;
    const section1Position7 = sectionRef.current[7]?.getBoundingClientRect().top;

    if (section1Position1 == 0) {
      setActiveSection(1);
      setRemoveSection();
    } else if (section1Position1 < 0) {
      setRemoveSection(1);
    } else if (section1Position1 > 0) {
      setRemoveSection(1);
    }

    if (section1Position2 == 0) {
      setActiveSection(2);
      setRemoveSection1();
    } else if (section1Position2 < 0) {
      setRemoveSection1(2);
    } else if (section1Position2 > 0) {
      setRemoveSection1(2);
    }

    if (section1Position3 == 0) {
      setActiveSection(3);
      setRemoveSection2();
    } else if (section1Position3 < 0) {
      setRemoveSection2(3);
    } else if (section1Position3 > 0) {
      setRemoveSection2(3);
    }

    if (section1Position4 == 0) {
      setActiveSection(4);
      setRemoveSection3();
    } else if (section1Position4 < 0) {
      setRemoveSection3(4);
    } else if (section1Position4 > 0) {
      setRemoveSection3(4);
    }

    if (section1Position5 == 0) {
      setActiveSection(5);
      setRemoveSection4();
    } else if (section1Position5 < 0) {
      setRemoveSection4(5);
    } else if (section1Position5 > 0) {
      setRemoveSection4(5);
    }

    if (section1Position6 == 0) {
      setActiveSection(6);
      setRemoveSection5();
    } else if (section1Position6 < 0) {
      setRemoveSection5(6);
    } else if (section1Position6 > 0) {
      setRemoveSection5(6);
    }

    if (section1Position7 == 0) {
      setActiveSection(7);
      setRemoveSection6();
    } else if (section1Position7 < 0) {
      setRemoveSection6(7);
    } else if (section1Position7 > 0) {
      setRemoveSection6(7);
    }
  };

  useEffect(() => {
    let stepList = [];
    for (let i = 1; i <= activeSection; i++) {
      stepList.push(i);
    }
    setStepsArr(stepList);
  }, [activeSection]);

  return (
    <div className="main-body">
      <AnimateContext
        value={{
          activeSection,
          removeSection,
          removeSection1,
          removeSection2,
          removeSection3,
          removeSection4,
          removeSection5,
          removeSection6,
          stepsArr,
        }}
      >
        <AnimateSection />

        <div
          ref={elementRef}
          className={`main-section active-${activeSection}`}
          onScroll={onSrcollElement}
        >
          <LeftPanel />
          <Slide1 ref={sectionRef} />
          <Slide2 ref={sectionRef} />
          <Slide3 ref={sectionRef} />
          <Slide4 ref={sectionRef} />
          <Slide5 ref={sectionRef} />
          <Slide6 ref={sectionRef} />
          <Slide7 ref={sectionRef} />
        </div>
      </AnimateContext>
    </div>
  );
}

export default App;
