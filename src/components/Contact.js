import React from "react";

function Contact() {
  return (
    <div className="w3-padding-64 w3-content w3-text-grey section" id="contact">
      <h2 className="w3-text-light-grey">Contact Me</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-col s12 m6">
          <div className="w3-section">
            <p>
              <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              Warangal, Telangana
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              Phone: 6305626919
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              Email: rajsri2319@gmail.com
            </p>
          </div>
        </div>
        <div className="w3-col s12 m6">
          <h3 className="w3-text-light-grey">Connect with Me</h3>
          <div className="w3-section">
            <a
              href="https://github.com/rajsri2319/ "
              className="w3-button w3-light-grey w3-margin-bottom"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aachi-sriraj-ayengar/"
              className="w3-button w3-light-grey w3-margin-bottom"
            >
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
