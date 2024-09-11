import React, { useRef } from "react";
import "../App.css";
import { HeaderComp } from "../components/header";
import ellipse from "../images/Ellipse.png";
import { Landing } from "../components/landing";
import { Pay } from "../components/pay";
import { Features } from "../components/features";
import { Footer } from "../components/footer";
import { Video } from "../components/video";
import { Qoute } from "../components/qoute";

export const Home = () => {
  // Create refs for the components you want to scroll to
  const payRef = useRef(null);
  const featuresRef = useRef(null);

  // Function to scroll to Pay component
  const scrollToPay = () => {
    try {
      if (payRef.current) {
        payRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error scrolling to Pay:", error);
    }
  };

  const scrollToFeatures = () => {
    try {
      if (featuresRef.current) {
        featuresRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error scrolling to Features:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="relative">
        {/* Gradient at the top-middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-0 w-full max-w-full overflow-hidden">
          <img src={ellipse} alt="Gradient" className="w-full object-cover" />
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Pass the scrollToPay and scrollToFeatures functions to HeaderComp */}
          <HeaderComp
            scrollToPay={scrollToPay}
            scrollToFeatures={scrollToFeatures}
          />
          <Landing scrollToPay={scrollToPay} />
          {/* Attach ref to the Features component */}
          <Features ref={featuresRef} />
          <Qoute />
          <Video />
          {/* Attach ref to the Pay component */}
          <Pay ref={payRef} /> {/* Add an id to the Pay component */}
          <Footer  />
        </div>
      </div>
    </div>
  );
};
