import React from "react";
import slideImg1 from "../assets/images/nexgtv-entertainment-mobile-app-development.png";
import slideImg2 from "../assets/images/nexgtv-mobile-app-ui-design.png";
import slideImg3 from "../assets/images/veme-blockchain-app-developed.png";
import slideImg4 from "../assets/images/veme-app-ui-design.png";
import slideImg5 from "../assets/images/measure-total-body-weight-through-fitness-app.png";
import slideImg6 from "../assets/images/nasa-fitness-tracking-mobile-app.png";
import slideImg7 from "../assets/images/ux-strategy-for-mobile-app-devlopment.png";
import slideImg8 from "../assets/images/domi-img1.png";
import slideImg9 from "../assets/images/pizza_box.png";
import slideImg10 from "../assets/images/dominos-bread1.png";
import slideImg11 from "../assets/images/karavan-social-networking-app-screen.png";
import slideImg12 from "../assets/images/social-networking-app-case-study.png";
import slideImg13 from "../assets/images/karavan_2.png";
import slideImg14 from "../assets/images/karavan-social-networking-app-screen-2.png";
import slideImg15 from "../assets/images/melltoo-img1.png";
import slideImg16 from "../assets/images/melltoo-img2.png";
import slideImg17 from "../assets/images/erp-app-development-service.png";
import { AnimateContext } from "../App";
import { useContext } from "react";

function AnimateSection() {
  
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
    <div className="animate-sec">
      {activeSection == 1 && (
        <div className="slide-img-sec1">
          <img
            src={slideImg1}
            className={`${
              removeSection == 1
                ? "animate-reverse"
                : activeSection == 1
                ? "animate-slide1"
                : ""
            }`}
          />
          <img
            src={slideImg2}
            className={`${
              removeSection == 1
                ? "animate-reverse"
                : activeSection == 1
                ? "animate-slide1"
                : ""
            }`}
          />
        </div>
      )}

      {activeSection == 2 && (
        <div className="slide-img-sec2">
          <img
            src={slideImg3}
            className={`${
              removeSection1 == 2
                ? "animate-reverse1"
                : activeSection == 2
                ? "animate-slide3"
                : ""
            }`}
          />
          <img
            src={slideImg4}
            className={`${
              removeSection1 == 2
                ? "animate-reverse2"
                : activeSection == 2
                ? "animate-slide4"
                : ""
            }`}
          />
        </div>
      )}

      {activeSection == 3 && (
        <div className="slide-img-sec3">
          <img
            src={slideImg5}
            className={`${
              removeSection2 == 3
                ? "animate-reverse3"
                : activeSection == 3
                ? "animate-slide5"
                : ""
            }`}
          />
          <img
            src={slideImg6}
            className={`${
              removeSection2 == 3
                ? "animate-reverse4"
                : activeSection == 3
                ? "animate-slide6"
                : ""
            }`}
          />
        </div>
      )}

      {activeSection == 4 && (
        <div className="slide-img-sec4">
          <img
            src={slideImg8}
            className={`${
              removeSection3 == 4
                ? "animate-reverse5"
                : activeSection == 4
                ? "animate-slide7"
                : ""
            }`}
          />
          <img
            src={slideImg7}
            className={`${
              removeSection3 == 4
                ? "animate-reverse6"
                : activeSection == 4
                ? "animate-slide8"
                : ""
            }`}
          />
          <img
            src={slideImg9}
            className={`${
              removeSection3 == 4
                ? "animate-reverse7"
                : activeSection == 4
                ? "animate-slide9"
                : ""
            }`}
          />
          <img
            src={slideImg10}
            className={`${
              removeSection3 == 4
                ? "animate-reverse8"
                : activeSection == 4
                ? "animate-slide10"
                : ""
            }`}
          />
        </div>
      )}

      {activeSection == 5 && (
        <div className="slide-img-sec5">
          <img
            src={slideImg12}
            className={`${
              removeSection4 == 5
                ? "animate-reverse9"
                : activeSection == 5
                ? "animate-slide11"
                : ""
            }`}
          />
          <img
            src={slideImg14}
            className={`${
              removeSection4 == 5
                ? "animate-reverse10"
                : activeSection == 5
                ? "animate-slide12"
                : ""
            }`}
          />
          <img
            src={slideImg11}
            className={`${
              removeSection4 == 5
                ? "animate-reverse9"
                : activeSection == 5
                ? "animate-slide11"
                : ""
            }`}
          />
          <img
            src={slideImg13}
            className={`${
              removeSection4 == 5
                ? "animate-reverse10"
                : activeSection == 5
                ? "animate-slide12"
                : ""
            }`}
          />
        </div>
      )}

      {activeSection == 6 && (
        <div className="slide-img-sec1 slide-sec5">
          <img
            src={slideImg15}
            className={`${
              removeSection5 == 6
                ? "animate-reverse"
                : activeSection == 6
                ? "animate-slide1"
                : ""
            }`}
          />
          <img
            src={slideImg16}
            className={`${
              removeSection5 == 6
                ? "animate-reverse"
                : activeSection == 6
                ? "animate-slide1"
                : ""
            }`}
          />
        </div>
      )}

      {activeSection == 7 && (
        <div className="slide-img-sec7">
          <img
            src={slideImg17}
            className={`${
              removeSection6 == 7
                ? "animate-reverse11"
                : activeSection == 7
                ? "animate-slide13"
                : ""
            }`}
          />
        </div>
      )}
    </div>
  );
}

export default AnimateSection;
