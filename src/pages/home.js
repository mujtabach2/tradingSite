import "../App.css";
import React, { useEffect } from "react";
import { HeaderComp } from "../components/header";
import ellipse from "../images/Ellipse.png";
import { Landing } from "../components/landing";
import { Pay } from "../components/pay";
import { Features } from "../components/features";
import { Footer } from "../components/footer";
import { SpeedometerCard } from "../components/speedometer";
export const Home = () => {
  // Run this effect once when the component mounts

  return (
    <div className="bg-black">
      <div className="relative min-h-screen">
        {/* Gradient at the top-middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-0">
          <img src={ellipse} alt="Gradient" />
        </div>
        <div className="relative z-10">
          <HeaderComp />
          <Landing />
          <Features />
          <Pay />
          <Footer />
        </div>
      </div>
    </div>
  );
};
