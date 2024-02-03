import React from "react";
import "./App.css";
import { AppRouter } from "./AppRouter.js";

const App = () => {
  // Run this effect once when the component mounts

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
