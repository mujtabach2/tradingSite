import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter.js";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";


const App = () => {
  // Run this effect once when the component mounts
  
// initalize firebase 

  initializeApp(firebaseConfig);
  



  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
