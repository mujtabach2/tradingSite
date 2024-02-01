import React, { useEffect } from "react";

export const StarryBackground = () => {
  useEffect(() => {
    const getRandomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const starsContainer = document.getElementById("stars-container");

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${getRandomNumber(0, 100)}%`;
      star.style.top = `${getRandomNumber(0, 100)}%`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div style={{ pointerEvents: "none" }}>
      <style>
        {`
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: white;
            border-radius: 50%;
          }
        `}
      </style>

      <div
        id="stars-container"
        className="absolute top-0 left-0 w-screen h-[380vh]"
      ></div>
    </div>
  );
};
