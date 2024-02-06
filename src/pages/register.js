import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../images/logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StarryBackground } from "../components/starryBackground";
import google from "../images/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const register = async () => {
    try {
      if (!agreeToTerms) {
        // Display an error or prevent registration if terms are not agreed
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then((userCredential) => {
          // User signed up successfully, now add custom attribute
          return userCredential.user.updateProfile({
            accountType: 'unpaid' // Default to unpaid
          });
        })
        .catch((error) => {
          // Handle errors
        });

            console.log(user);
          } catch (error) {
            console.error(error);
          }
        };

  const registerWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const authInstance = auth();

      const result = await signInWithPopup(authInstance, provider);

      // 'result.user' contains the user information
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
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

          <FormControlLabel
            control={
              <Checkbox
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
            }
            label="I agree to terms & conditions"
            className="mb-2"
          />

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
    </div>
  );
};
