import React from "react";
import linkedin from "../images/icons8-linkedin-24.png";
import github from "../images/icons8-github-24.png";
import email from "../images/icons8-email-24.png";
import logo from "../images/logo.png";

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-900 text-neutral-content relative bottom-0 w-[100vw] ml-[-2rem] mt-20">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <aside className="mb-8 md:mb-0">
          <div className="flex flex-col items-center md:items-start">
            <img className="w-40" src={logo} alt="SharpeTrade Logo" />
            <p className="text-center md:text-left mt-2">
              SharpeTrade <br />
              All rights reserved.© 2024
            </p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-center md:text-left">Social</h6>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/mujtaba-chaudhry" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/mujtabach2" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a href="mailto:mujtabawaqas@gmail.com">
              <img src={email} alt="Email" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};
