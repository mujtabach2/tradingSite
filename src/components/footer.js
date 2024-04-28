import React from "react";
import linkedin from "../images/icons8-linkedin-24.png";
import github from "../images/icons8-github-24.png";
import email from "../images/icons8-email-24.png";
import logo from "../images/logo.png";
import { link } from "fs";
export const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-900 text-neutral-content mt-40">
    <aside class="ml-10">
      <div class="flex flex-col items-start">
        <img class="w-40" src={logo} />
        <p>SharpeTrade <br/>All rights reserved.© 2024</p>
      </div>
    </aside> 
    <nav class="ml-[30rem]">
      <h6 className="footer-title">Social</h6> 
      <div className="grid grid-flow-col gap-4">
      <a href="https://www.linkedin.com/in/mujtaba-chaudhry" target="_blank"><img src={linkedin} alt="LinkedIn"/></a>
      <a href="https://www.github.com/mujtabach2" target="_blank"><img src={github} alt="GitHub"/></a>
      <a href="mailto:mujtabawaqas@gmail.com" target="_blank"><img src={email} alt="Email"/></a>

      </div>
    </nav>
  </footer>
  );
};
