import { useState } from "react";
import "./ImageSlider.css";

export const ImageSlider = ({
  imageArray,
  onPrevClick,
  onNextClick,
  activeIndexImg,
  onButtonClick,
}) => {
  
  return (
    <>
      <div className="container">
        <div style={{ position: "relative" }}>
          <button
            className="btn"
            disabled={activeIndexImg === 0}
            onClick={onPrevClick}
          >
            Prev
          </button>
          <img src={imageArray[activeIndexImg]} alt="" />
          <button
            className="btn2"
            disabled={activeIndexImg === imageArray.length - 1}
            onClick={onNextClick}
          >
            Next
          </button>
        </div>
        <div style={{ display: "flex" }}>
          {[...Array(imageArray?.length)].map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => onButtonClick(index)}
                className={`circle ${activeIndexImg === index && "checked"}`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
