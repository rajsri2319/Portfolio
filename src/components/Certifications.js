import React from "react";

function Certifications() {
  return (
    <div className="w3-padding-64 w3-content section" id="certifications">
      <h2 className="w3-text-light-grey">Certifications</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-col s12 m6">
          <h3>AI, Business & the Future of Work</h3>
          <p>Coursera</p>
          <a
            href="https://cour sera.org/ver ify/5QDV474BS9ULT6X3"
            target="_blank"
            rel="noopener noreferrer"
            className="w3-button w3-light-grey"
          >
            View Certificate
          </a>
        </div>
        {/* Add more certifications similarly */}
      </div>
    </div>
  );
}

export default Certifications;
