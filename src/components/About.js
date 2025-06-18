import React from "react";

function About() {
  return (
    <div
      className="w3-content w3-justify w3-text-grey w3-padding-64 section"
      id="about"
    >
      <h2 className="w3-text-light-grey">About Me</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <p>
        Hello Connections! I’m Sriraj, a highly motivated individual with a
        passion for exploring diverse opportunities and continuously expanding
        my knowledge base. I am well-versed in Python, C, Java, and have
        hands-on experience in Frontend/Web Development using technologies like
        HTML, CSS, JavaScript, and frameworks like Flask. I’m dedicated to
        continuous learning and always open to new challenges that help me grow
        both personally and professionally. I am enthusiastic about leveraging
        my skills to contribute meaningfully to projects, collaborate
        effectively with teams, and gain valuable experience across various
        domains in the IT industry. Let’s connect and explore opportunities to
        build something impactful together!
      </p>
      <h3 className="w3-padding-16 w3-text-light-grey">Skills</h3>
      <div className="w3-row" id="skills-container">
        <div className="w3-col m6 skill-column visible">
          <h4>Programming Languages</h4>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="w3-col m6 skill-column visible">
          <h4>Web Development</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
