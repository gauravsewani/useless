// GalaxyEffect.js
import React, { useEffect } from "react";

const GalaxyEffect = ({ children }) => {
  useEffect(() => {
    const galaxyContainer = document.querySelector(".galaxyContainer");
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const starSize = Math.random() * 3 + 1; // Varying star sizes between 1 and 4
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;

      if (starSize > 2) {
        star.style.filter = "blur(1px)"; // Apply blur effect for larger stars
      }

      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      star.style.left = `${randomX}%`;
      star.style.top = `${randomY}%`;

      // Add random animation delay to create random blinking effect
      star.style.animationDelay = `${Math.random() * 5}s`;

      galaxyContainer.appendChild(star);
    }
  }, []);
  return (
    <div className="galaxyContainer absolute top-0 left-0 w-full h-full object-cover z-0">
      {" "}
      {children}
    </div>
  );
};

export default GalaxyEffect;
