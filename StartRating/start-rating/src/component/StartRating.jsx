import { useEffect, useState } from "react";
import "./StarRating.css";

export const StarRating = ({ index = 10 }) => {
  const stars = Array.from(Array(index).keys());
  const [selectedStarHover, setSelectedStarHover] = useState(stars);
  const [lock, setLock] = useState(false);

  const isChecked = (index) => {
    let newArr =
      selectedStarHover.length - 1 < index
        ? Array.from(Array(index + 1).keys())
        : selectedStarHover.slice(0, index + 1);

    setSelectedStarHover(newArr);
  };

  const selectStar = (index) => {
    const newSelection = Array.from(Array(index + 1).keys());
    setSelectedStarHover(newSelection);
    setLock(!lock);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
      }}
    >
      {stars.map((star, index) => {
        return (
          <div
            key={index}
            className={`fa fa-star icon-styling ${
              selectedStarHover.includes(index) ? "checked" : ""
            }`}
            onMouseEnter={() => !lock && isChecked(index)}
            onClick={() => selectStar(index)}
          ></div>
        );
      })}
    </div>
  );
};
