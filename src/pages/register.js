import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getIdToken,
  updateProfile,
} from "firebase/auth";
import {
  getAuth as auth,
  db,
  registerWithGoogle as googleRegister,
  RegisterAccount,
} from "../firebase";
import logo from "../images/logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StarryBackground } from "../components/starryBackground";
import google from "../images/google.png";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { getAuth as getAdminAuth } from "firebase/auth"; // Import getAuth from admin SDK
import { useNavigate } from "react-router-dom";
import stock from "../images/stock.png";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    try {
      if (!agreeToTerms) {
        alert("You must agree to the terms and conditions before registering.");
        return;
      }
      await RegisterAccount(registerEmail, registerPassword);
      // Registration successful, navigate to next page or show success message
      navigate("/login");
    } catch (error) {
      // Handle specific authentication errors
      if (error.code === "auth/weak-password") {
        alert("The password is too weak.");
      } else if (error.code === "auth/email-already-in-use") {
        alert("The email address is already in use.");
      } else {
        // Handle other authentication errors or show a generic error message
        alert("An error occurred during registration. Please try again later.");
        console.error("Registration Error:", error);
      }
    }
  };

  const registerWithGoogle = async () => {
    await googleRegister();
    navigate("/login");
  };

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
              Ready to get started?
            </div>
            <div className="text-3xl font-semibold font-['Poppins'] ">
              Create an account 🚀
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <TextField
              type="email"
              label="Email address"
              variant="outlined"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
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
              label="Create password"
              variant="outlined"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="mb-2"
              sx={{
                label: { color: "#d1d4db" },
                backgroundColor: "#080E18",
                borderRadius: "1vh",
                input: { color: "white" },
              }}
            />
          </div>

          <Popup
            trigger={<button className="text-white">Agree To Terms</button>}
            modal
            nested
            closeOnDocumentClick={false}
            overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            {(close) => (
              <div className="flex flex-col gap-2">
                <div className="text-lg font-normal font-['Poppins'] ">
                  Terms & Conditions
                </div>
                <div className="text-[0.75rem] font-semibold font-['Poppins'] ">
                  Use of Service: By accessing or using the SharpeTrade
                  platform, you agree to be bound by these terms and conditions.
                  Financial Advice Disclaimer: SharpeTrade is not a registered
                  financial advisor, broker, or dealer. The signals provided are
                  for informational purposes only and should not be construed as
                  financial advice. Users are responsible for making their own
                  investment decisions. Accuracy of Information: While we strive
                  to provide accurate and up-to-date information, we do not
                  guarantee the accuracy, completeness, or reliability of any
                  information provided on the platform. Users should
                  independently verify all information before making any
                  investment decisions. Risk Disclosure: Investing in stocks and
                  financial markets carries inherent risks. Users acknowledge
                  and understand that there is a risk of loss associated with
                  investing and that past performance is not indicative of
                  future results. Subscription and Fees: Access to certain
                  features of the SharpeTrade platform may require a
                  subscription fee. By subscribing, users agree to pay the
                  applicable fees as outlined on the platform. Intellectual
                  Property: All content, including but not limited to signals,
                  analysis, articles, and graphics, is the property of
                  SharpeTrade and is protected by copyright and other
                  intellectual property laws. Users may not reproduce,
                  distribute, or modify any content without prior written
                  consent. User Conduct: Users agree to use the SharpeTrade
                  platform in compliance with all applicable laws and
                  regulations. Users may not engage in any conduct that is
                  unlawful, harmful, threatening, abusive, or otherwise
                  objectionable. Privacy Policy: By using the SharpeTrade
                  platform, users agree to the terms of our Privacy Policy,
                  which outlines how we collect, use, and disclose personal
                  information. Termination of Service: SharpeTrade reserves the
                  right to terminate or suspend access to the platform at any
                  time, with or without cause, and without prior notice.
                  Modification of Terms: SharpeTrade reserves the right to
                  modify these terms and conditions at any time. Users are
                  responsible for reviewing the terms periodically for changes.
                  Continued use of the platform after any modifications
                  indicates acceptance of the revised terms.
                </div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreeToTerms}
                      onChange={(e) => (
                        setAgreeToTerms(e.target.checked), close
                      )}
                    />
                  }
                  label={` By clicking "I agree to terms & conditions," users acknowledge that they have read, understood, and agree to abide by these terms and conditions.`}
                  className="mb-2"
                />
              </div>
            )}
          </Popup>

          <button
            onClick={register}
            className="bg-yellow-400 text-white py-2 rounded-2 mt-2 hover:bg-yellow-500"
          >
            Register Account
          </button>

          <div className="flex flex-row justify-center items-center mt-3">
            <div className="flex-1 border-b border-gray-400"></div>
            <div className="text-base font-medium mx-2">or</div>
            <div className="flex-1 border-b border-gray-400"></div>
          </div>

          <button
            onClick={registerWithGoogle}
            className="flex flex-row bg-gray-900 py-4 rounded-[4vh] mt-2 hover:bg-gray-800 border border-black active:bg-gray-700"
          >
            <img className="h-6 w-6 mr-10 ml-4" src={google} alt="Google" />
            <div className="text-base font-medium">Register with Google</div>
          </button>

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
