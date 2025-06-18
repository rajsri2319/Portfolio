import React from "react";

function Sidebar() {
  return (
    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <img src="Profile.webp" style={{ width: "100%" }} alt="Profile" />
      <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
        <i className="fa fa-home w3-xxlarge"></i>
        <p>HOME</p>
      </a>
      <a
        href="#about"
        className="w3-bar-item w3-button w3-padding-large w3-hover-black"
      >
        <i className="fa fa-user w3-xxlarge"></i>
        <p>ABOUT</p>
      </a>
      <a
        href="#projects"
        className="w3-bar-item w3-button w3-padding-large w3-hover-black"
      >
        <i className="fa fa-briefcase w3-xxlarge"></i>
        <p>PROJECTS</p>
      </a>
      <a
        href="#internships"
        className="w3-bar-item w3-button w3-padding-large w3-hover-black"
      >
        <i className="fa fa-briefcase w3-xxlarge"></i>
        <p>INTERNSHIPS</p>
      </a>
      <a
        href="#certifications"
        className="w3-bar-item w3-button w3-padding-large w3-hover-black"
      >
        <i className="fa fa-certificate w3-xxlarge"></i>
        <p>CERTIFICATIONS</p>
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button w3-padding-large w3-hover-black"
      >
        <i className="fa fa-envelope w3-xxlarge"></i>
        <p>CONTACT</p>
      </a>
    </nav>
  );
}

export default Sidebar;
