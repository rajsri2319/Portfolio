import React from "react";

function Header() {
  return (
    <header
      className="w3-container w3-padding-32 w3-center w3-black section"
      id="home"
    >
      <div className="w3-row">
        <div className="w3-col s12">
          <img
            src="Profile.jpg"
            alt="Avatar"
            className="w3-image profile-image"
            style={{ width: "80%", maxWidth: "300px" }}
          />
        </div>
        <div className="w3-col s12">
          <h1 className="w3-jumbo text-adjust">
            <span className="w3-hide-small">I am</span> Aachi Sriraj Ayengar.
          </h1>
          <p className="text-adjust">
            <h3>Passionate About Web Development and AIML Enthusiast.</h3>
          </p>
          <a href="Resume.pdf">
            <button className="w3-button w3-light-grey w3-padding-large w3-section">
              <i className="fa fa-download"></i> Download Resume
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
