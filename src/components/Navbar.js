import React from "react";

function Navbar() {
  return (
    <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
      <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <a href="#" className="w3-bar-item w3-button">
          HOME
        </a>
        <a href="#about" className="w3-bar-item w3-button">
          ABOUT
        </a>
        <a href="#projects" className="w3-bar-item w3-button">
          PROJECTS
        </a>
        <a href="#internships" className="w3-bar-item w3-button">
          INTERNSHIPS
        </a>
        <a href="#certifications" className="w3-bar-item w3-button">
          CERTIFICATIONS
        </a>
        <a href="#contact" className="w3-bar-item w3-button">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Navbar;
