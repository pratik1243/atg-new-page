import React, { useContext } from "react";
import { AnimateContext } from "../App";
import arrowIcon from "../assets/images/arrow-icon.svg";

const TextAnimateSection1 = () => {
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
    <div className="text-animate-section2">
      {activeSection == 1 && (
        <>
          <div>
            <span
              className={`text-1 ${
                removeSection == 1
                  ? "text-animate-reverse"
                  : activeSection == 1
                  ? "animate-text"
                  : ""
              }`}
            >
              ABC 123
            </span>
          </div>
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
              We are the best web development company in the world
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
              <a className="left-link-btn">Coming Soon</a>
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
              ABC 234
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
              We are the best blockchain development company in the world
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
              <a className="left-link-btn">View Case Study <img src={arrowIcon} /></a>
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
              ABC 356
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
              We are the best web development compant in the world
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
              <a className="left-link-btn">View Case Study <img src={arrowIcon} /></a>
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
              ABC 456
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
              We are the best web development compant in the world
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
              <a className="left-link-btn">View Case Study <img src={arrowIcon} /></a>
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
              ABC 567
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
              We are the best web development compant in the world
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
              <a className="left-link-btn">View Case Study <img src={arrowIcon} /></a>
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
              ABC 700
            </span>
          </div>
          <div>
            <span
              className={`text-2 ${
                removeSection5 == 6
                  ? "text-animate-reverse"
                  : activeSection == 6
                  ? "animate-text"
                  : ""
              }`}
            >
              We are the best web development compant in the world
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
              <a className="left-link-btn">Coming Soon</a>
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
              ABC 123
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
              We are the best web development compant in the world
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
             <a className="left-link-btn">View Case Study <img src={arrowIcon} /></a>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default TextAnimateSection1;
