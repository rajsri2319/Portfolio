import React from "react";

function Footer() {
  return (
    <footer className="w3-content w3-padding-32 w3-text-grey w3-xlarge">
      <a href="https://github.com/rajsri2319/">
        <i className="fa fa-github w3-hover-opacity"></i>
      </a>
      <a href="https://www.linkedin.com/in/aachi-sriraj-ayengar/">
        <i className="fa fa-linkedin w3-hover-opacity"></i>
      </a>
      <p className="w3-medium">
        Powered by{" "}
        <a
          href="https://www.linkedin.com/in/aachi-sriraj-ayengar/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-hover-text-green"
        >
          Aachi Sriraj Ayengar
        </a>
      </p>
    </footer>
  );
}

export default Footer;
