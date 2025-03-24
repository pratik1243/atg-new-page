import React, { useContext } from "react";
import { AnimateContext } from "../App";

const Stepper = () => {
  const { stepsArr } = useContext(AnimateContext);
  
  const strokeNum = () => {
    if (stepsArr.at(-1) == 2) {
      return "130";
    } else if (stepsArr.at(-1) == 3) {
      return "280";
    } else if (stepsArr.at(-1) == 4) {
      return "410";
    } else if (stepsArr.at(-1) == 5) {
      return "540";
    } else if (stepsArr.at(-1) == 6) {
      return "680";
    } else if (stepsArr.at(-1) == 7) {
      return "1000";
    } else {
      return "0";
    }
  };

  return (
    <div className="stepper-sec">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="transring"
        x="0px"
        y="0px"
        viewBox="0 0 414 414"
        style={{ enableBackground: "new 0 0 414 414", zIndex: 1 }}
        xmlSpace="preserve"
      >
        <path
          id="Transparent_Ring"
          className="transrg"
          style={{
            opacity: 0.4,
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            enableBackground: "new",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173c-47.8,0-91-19.4-122.3-50.7"
        />
        <path
          id="Opaque_Ring"
          className="transrgwht"
          strokeDasharray={`${strokeNum()},1000`}
          style={{
            fill: "none",
            stroke: "rgb(245, 240, 240)",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            transition: "0.4s",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173c-47.8,0-91-19.4-122.3-50.7"
        />
        <g id="Dots1" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill1"
              style={{
                fill: stepsArr.includes(1)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(1) ? 1 : 0.5,
              }}
              d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
          <g>
            <path
              className="dotsstro1"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(1) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
        </g>
        <g id="Dots2" className="dots-nav">
          <g>
            <path
              id="dotsst dotsfill2"
              style={{
                fill: stepsArr.includes(2)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(2) ? 1 : 0.5,
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
          <g>
            <path
              className="dotsstro2"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(2) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
        </g>
        <g id="Dots3" className="dots-nav">
          <g>
            <path
              id="dotsst dotsfill3"
              style={{
                fill: stepsArr.includes(3)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(3) ? 1 : 0.5,
              }}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
          <g>
            <path
              className="dotsstro3"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(3) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
        </g>
        <g id="Dots4" className="dots-nav">
          <g>
            <path
              id="dotsst dotsfill4"
              style={{
                fill: stepsArr.includes(4)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(4) ? 1 : 0.5,
              }}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
          <g>
            <path
              className="dotsstro4"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(4) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
        </g>
        <g id="Dots5" className="dots-nav">
          <g>
            <path
              id="dotsst dotsfill5"
              style={{
                fill: stepsArr.includes(5)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(5) ? 1 : 0.5,
              }}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
          <g>
            <path
              className="dotsstro5"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(5) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
        </g>
        <g id="Dots6" className="dots-nav">
          <g>
            <path
              id="dotsst dotsfill6"
              style={{
                fill: stepsArr.includes(6)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(6) ? 1 : 0.5,
              }}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
          <g>
            <path
              className="dotsstro6"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(6) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
        </g>
        <g id="Dots7" className="dots-nav">
          <g>
            <path
              id="dotsst dotsfill7"
              style={{
                fill: stepsArr.includes(7)
                  ? "rgb(0, 146, 255)"
                  : "rgb(247, 250, 252)",
                opacity: stepsArr.includes(7) ? 1 : 0.5,
              }}
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
          <g>
            <path
              className="dotsstro7"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: stepsArr.includes(7) ? 2 : 0,
                strokeMiterlimit: 10,
              }}
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Stepper;
