import React, { useState, useEffect } from "react";

export const HeaderComp = () => {
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set a threshold value based on your design
      const threshold = 100;

      // Update the state based on the scroll position
      setHeaderFixed(scrollY > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Your existing header content goes here */}
      <div className={`container mx-auto py-4 `}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-16 h-16" src="https://via.placeholder.com/64x64" alt="Logo" />
            <div className="ml-4 text-white text-opacity-90 text-xl font-bold font-['Inter'] leading-7">CapiTradie</div>
          </div>
          <div className={`hidden md:flex ml-10 left-1/2 space-x-6 border border-solid border-white border-opacity-15 bg-white bg-opacity-15 backdrop-filter backdrop-blur-10 rounded-full px-4 py-5 ${isHeaderFixed ? 'fixed left-1/2 transform -translate-x-1/2' : ''}`}>
            <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8">Markets</button>
            <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8">News</button>
            <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8">Community</button>
            <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8">More</button>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:text-opacity-80 ">Login</button>
            <div className="bg-black rounded-3xl shadow-inner border border-[#F3BA2F] hover:bg-[#F3BA2F]">
              <button className="py-3 px-6 text-center text-white text-lg font-medium font-['Inter'] leading-normal ">Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
