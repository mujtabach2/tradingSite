import logo from "./logo.svg";
import "./App.css";
import { NewsCarousel } from "./components/newsCarsoul";
import React, { useEffect } from "react";
import { HeaderComp } from "./components/header";
import { StarryBackground } from "./components/starryBackground";
import ellipse from "./images/Ellipse.png";
import { Landing } from "./components/landing";
import { Pay } from "./components/pay";
import {Features} from "./components/features";
const App = () => {
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
          <Pay />
          <Features />
        </div>
       

      </div>
    </div>
  );
};

export default App;
