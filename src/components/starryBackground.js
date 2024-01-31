import React, { useEffect } from "react";
import ellipse from "../images/Ellipse.png";
import { HeaderComp } from "./header";

export const StarryBackground = () => {
  useEffect(() => {
    // Function to generate a random number between min and max
    const getRandomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    // Get the stars container
    const starsContainer = document.getElementById("stars-container");

    // Generate 50 stars with random positions
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

      {/* Stars Container */}
      <div id="stars-container" className="absolute top-0 left-0 w-full h-full">
        {/* Stars will be dynamically generated here */}
      </div>
    </div>
  );
};
