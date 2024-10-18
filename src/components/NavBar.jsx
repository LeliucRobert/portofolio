/** @format */

import React, { useState } from "react";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBarLabel">
        <div className="NavBarLabel1">Software</div>
        <div className="NavBarLabel2">Developer</div>
      </div>

      <div className="NavBarLinks">
        <a href="#home-section">Home</a>
        <a href="#about-section">About</a>
        <a href="#projects-section">Projects</a>
        <a href="#skills-section">Skills</a>

        <a href="#contact-section">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
