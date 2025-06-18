import React, { useState } from "react";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "Sign1.jpeg", alt: "Sign Language Recognition" },
    { src: "Sign2.jpeg", alt: "Sign Language Recognition" },
  ];

  const plusSlides = (n) => {
    setCurrentSlide((prev) => (prev + n + slides.length) % slides.length);
  };

  return (
    <div className="w3-padding-64 w3-content section" id="projects">
      <h2 className="w3-text-light-grey">Projects</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-col s12 m6">
          <h3>Automated Solar Windows</h3>
          <p>
            Developed a system that utilizes IoT technology to automate the
            operation of solar windows based on environmental conditions such as
            sunlight intensity and temperature. Integrated sensors and actuators
            to optimize energy efficiency and user comfort.
          </p>
        </div>
        {/* Add more projects similarly */}
      </div>
    </div>
  );
}

export default Projects;
