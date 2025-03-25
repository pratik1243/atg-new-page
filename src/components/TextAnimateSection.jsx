import React, { useContext } from "react";
import { AnimateContext } from "../App";
import slideImg18 from "../assets/images/nasa-mobile-app.png";

const TextAnimateSection = () => {
  const {
    activeSection,
    removeSection,
    removeSection1,
    removeSection2,
    removeSection3,
    removeSection4,
    removeSection5,
    removeSection6,
  } = useContext(AnimateContext);
  return (
    <div className="text-animate-section">
      {activeSection == 1 && (
        <>
          <div>
            <span
              className={`text-2 ${
                removeSection == 1
                  ? "text-animate-reverse"
                  : activeSection == 1
                  ? "animate-text"
                  : ""
              }`}
            >
              25m+ downloads
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection == 1
                  ? "text-animate-reverse"
                  : activeSection == 1
                  ? "animate-text"
                  : ""
              }`}
            >
              on appstore and playstore
            </span>
          </div>
        </>
      )}
      {activeSection == 2 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection1 == 2
                  ? "text-animate-reverse"
                  : activeSection == 2
                  ? "animate-text"
                  : ""
              }`}
            >
              the next big
            </span>
          </div>
          <div>
            <span
              className={`text-2 ${
                removeSection1 == 2
                  ? "text-animate-reverse"
                  : activeSection == 2
                  ? "animate-text"
                  : ""
              }`}
            >
              blockchain
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection1 == 2
                  ? "text-animate-reverse"
                  : activeSection == 2
                  ? "animate-text"
                  : ""
              }`}
            >
              revolution
            </span>
          </div>
        </>
      )}
      {activeSection == 3 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection2 == 3
                  ? "text-animate-reverse"
                  : activeSection == 3
                  ? "animate-text"
                  : ""
              }`}
            >
              powered by advanced
            </span>
          </div>
          <div>
            <span
              className={`text-2 ${
                removeSection2 == 3
                  ? "text-animate-reverse"
                  : activeSection == 3
                  ? "animate-text"
                  : ""
              }`}
            >
              <img src={slideImg18} height={60} width={260} style={{ marginTop:"12px" }} />
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection2 == 3
                  ? "text-animate-reverse"
                  : activeSection == 3
                  ? "animate-text"
                  : ""
              }`}
            >
              algorithm
            </span>
          </div>
        </>
      )}
      {activeSection == 4 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection3 == 4
                  ? "text-animate-reverse"
                  : activeSection == 4
                  ? "animate-text"
                  : ""
              }`}
            >
              redefining
            </span>
          </div>
          <div>
            <span
              className={`text-2 mb-2 ${
                removeSection3 == 4
                  ? "text-animate-reverse"
                  : activeSection == 4
                  ? "animate-text"
                  : ""
              }`}
            >
              UX strategy
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection3 == 4
                  ? "text-animate-reverse"
                  : activeSection == 4
                  ? "animate-text"
                  : ""
              }`}
            >
              and ui design
            </span>
          </div>
        </>
      )}
      {activeSection == 5 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection4 == 5
                  ? "text-animate-reverse"
                  : activeSection == 5
                  ? "animate-text"
                  : ""
              }`}
            >
              text headline
            </span>
          </div>
          <div>
            <span
              className={`text-2 ${
                removeSection4 == 5
                  ? "text-animate-reverse"
                  : activeSection == 5
                  ? "animate-text"
                  : ""
              }`}
            >
              text headline
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection4 == 5
                  ? "text-animate-reverse"
                  : activeSection == 5
                  ? "animate-text"
                  : ""
              }`}
            >
              footer headline
            </span>
          </div>
        </>
      )}
      {activeSection == 6 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection5 == 6
                  ? "text-animate-reverse"
                  : activeSection == 6
                  ? "animate-text"
                  : ""
              }`}
            >
              biggest classfields
            </span>
          </div>
          <div>
            <span
              className={`text-2 font-lg ${
                removeSection5 == 6
                  ? "text-animate-reverse"
                  : activeSection == 6
                  ? "animate-text"
                  : ""
              }`}
            >
              east asia
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection5 == 6
                  ? "text-animate-reverse"
                  : activeSection == 6
                  ? "animate-text"
                  : ""
              }`}
            >
              countries
            </span>
          </div>
        </>
      )}
      {activeSection == 7 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection6 == 7
                  ? "text-animate-reverse"
                  : activeSection == 7
                  ? "animate-text"
                  : ""
              }`}
            >
              developing ERP solutions
            </span>
          </div>
          <div>
            <span
              className={`text-2 ${
                removeSection6 == 7
                  ? "text-animate-reverse"
                  : activeSection == 7
                  ? "animate-text"
                  : ""
              }`}
            >
              text headline
            </span>
          </div>
          <div>
            <span
              className={`text-3 ${
                removeSection6 == 7
                  ? "text-animate-reverse"
                  : activeSection == 7
                  ? "animate-text"
                  : ""
              }`}
            >
              in furniture industry
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default TextAnimateSection;
