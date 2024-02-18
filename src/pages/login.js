import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StarryBackground } from "../components/starryBackground";
import google from "../images/google.png";
import { log, googleLog } from "../firebase";

import { useNavigate } from "react-router-dom";
import stock from "../images/stock.png";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try {
      // Use Firebase Authentication function to sign in with email and password
      await log(loginEmail, loginPassword);

      setIsLoggedIn(true);
    } catch (error) {
      // Handle specific authentication errors
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Invalid email or password. Please try again.");
      } else {
        // Handle other authentication errors or show a generic error message
        alert("An error occurred during login. Please try again later.");
        console.error("Login Error:", error);
      }
    }
  };

  const googleLogin = async () => {
    await googleLog();
    setIsLoggedIn(true);
  };
  useEffect(() => {
    // Redirect to dashboard if isLoggedIn is true
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex w-full h-full bg-white">
      <style>
        {`
          #stars-container {
            height: 100vh;
            background: #080E18;  
            z-index: -1;
          }
        `}
      </style>
      <StarryBackground />
      <div className="flex flex-col w-[50%] h-[100vh] bg-[#202227] items-center justify-center bg-opacity-1">
        <div className="flex flex-col w-[20vw] h-[100vh] mt-[20vh] text-white">
          <div className="flex flex-col text-left">
            <div className="text-lg font-normal font-['Poppins'] ">
              Welcome back!
            </div>
            <div className="text-3xl font-semibold font-['Poppins'] ">
              Log in 👋
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <TextField
              type="email"
              label="Email address"
              variant="outlined"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="mb-2"
              sx={{
                label: { color: "#d1d4db" },
                backgroundColor: "#080E18",
                borderRadius: "1vh",
                input: { color: "white" },
              }}
            />

            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="mb-2"
              sx={{
                label: { color: "#d1d4db" },
                backgroundColor: "#080E18",
                borderRadius: "1vh",
                input: { color: "white" },
              }}
            />
          </div>

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember me"
            className="mb-2"
          />

          <button
            onClick={login}
            className="bg-yellow-400 text-white py-2 rounded-2 mt-2 hover:bg-yellow-500"
          >
            Log in
          </button>

          <div className="flex flex-row justify-center items-center mt-3">
            <div className="flex-1 border-b border-gray-400"></div>
            <div className="text-base font-medium mx-2">or</div>
            <div className="flex-1 border-b border-gray-400"></div>
          </div>

          <button
            className="flex flex-row bg-gray-900 py-4 rounded-[4vh] mt-2 hover:bg-gray-800 border border-black active:bg-gray-700"
            onClick={googleLogin}
          >
            <img className="h-6 w-6 mr-10 ml-4" src={google} alt="Google" />
            <div className="text-base font-medium">Log in with Google</div>
          </button>

          <div className="flex justify-center mt-10">
            <a href="/register" className="text-white">
              Don't have an account? Sign up
            </a>
          </div>

          <div className="flex justify-center mt-10">
            <img className="eye h-10 " src={logo} alt="Eye" />
          </div>
        </div>
      </div>

      <div className="flex w-[50%] h-[100vh] bg-gray-800 items-center justify-center bg-opacity-1">
        <img className="w-[50%] h-[50%]" src={stock} alt="Logo" />
      </div>
    </div>
  );
};
