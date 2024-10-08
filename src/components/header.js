import React, { useState, useEffect, useContext } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import { getUserData } from "../firebase";
import menu from "../images/menu.png";
export const HeaderComp = ({ scrollToPay, scrollToFeatures }) => {
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isPaid, setIsPaid] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect only runs once after initial render
  if (user) {
    (async () => {
      try {
        const userData = await getUserData(user.uid);
        setIsPaid(userData.paid);
        console.log("User data:", isPaid);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    })();
  }

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <header className="w-full">
      <div className="flex justify-center w-full">
        <div className={`container mx-auto py-2 px-4`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                className={`w-auto ${isSmallScreen ? "h-8" : "h-12"}`}
                src={logo}
                alt="Logo"
              />
            </div>
            <div
              className={` ml-[-6vh] flex hidden md:flex ml-10 space-x-6 border border-solid border-white border-opacity-15 bg-white bg-opacity-15 backdrop-filter backdrop-blur-10 rounded-full px-4 py-5 z-20 ${isHeaderFixed ? "fixed left-[0vw] transform -translate-x-1/2 bg-opacity-40 bg-grey" : ""}`}
            >
              <button
                className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8"
                onClick={handleDashboard}
              >
                Dashboard
              </button>
              <button
                className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8"
                onClick={scrollToPay}
              >
                Plans
              </button>
              <button
                className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8"
                onClick={scrollToFeatures}
              >
                Features
              </button>
              <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8">
                <a
                  href="https://www.linkedin.com/in/mujtaba-chaudhry"
                  target="_blank"
                >
                  Contact Us{" "}
                </a>
              </button>
            </div>
            <div className="flex items-center space-x-6">
              {isSmallScreen ? (
                <div className="dropdown relative">
                  <button className="dropbtn text-white p-2">
                    <img className="w-6 h-6" src={menu} alt="Menu" />
                  </button>
                  <div className="dropdown-content absolute right-0 mt-2 w-48 bg-black bg-opacity-80 rounded-md shadow-lg">
                    {user ? (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={() => navigate("/dashboard")}
                      >
                        Dashboard
                      </button>
                    ) : (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </button>
                    )}
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                      onClick={scrollToPay}
                    >
                      Free Trial
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {user ? (
                    <button
                      className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:text-opacity-80 "
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </button>
                  ) : (
                    <button
                      className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:text-opacity-80 "
                      onClick={() => navigate("/register")}
                    >
                      Login
                    </button>
                  )}
                  <div className="bg-black rounded-3xl shadow-inner border border-[#F3BA2F] hover:bg-[#F3BA2F]">
                    {!isPaid ? (
                      <button
                        className="py-3 px-6 text-center text-white text-lg font-medium font-['Inter'] leading-normal "
                        onClick={scrollToPay}
                      >
                        Start Free Trial
                      </button>
                    ) : (
                      <button
                        className="py-3 px-6 text-center text-white text-lg font-medium font-['Inter'] leading-normal "
                        onClick={scrollToPay}
                      >
                        Upgrade Plan
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
    .dropbtn {
      background-color: transparent;
      color: white;
      padding: 12px;
      font-size: 16px;
      border: none;
      padding-left: 20vw;
    }
    
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      display: none;
      position: absolute;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      padding-right: 40vw;
      font-size: 16px;
      text-align: center;
    }
    
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }
    
    /* Style for dropdown content items */
    .dropdown-content button {
      background: none;
      border: none;
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
    
    /* Underline effect on hover */
    .dropdown-content button:hover {
      text-decoration: underline;
      text-decoration-color: #F3BA2F;
    }
  `}
      </style>
    </header>
  );
};
