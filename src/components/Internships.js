import React from "react";

function Internships() {
  return (
    <div className="w3-padding-64 w3-content section" id="internships">
      <h2 className="w3-text-light-grey">Internships</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-col s12 m6">
          <h3>Software Developer Intern at PSPTechHub</h3>
          <p>Duration: 4 months</p>
          <p>Aug 2024 – Nov 2024</p>
          <p>
            Simulated industrial monitoring with real-time Grafana dashboards
            using Python for data generation. Automated data flow from
            KepServerEX to InfluxDB using Telegraf. Designed interactive
            dashboards with Ignition Edge and Edge Historian, incorporating
            Python for data simulation. Connected KepServerEX to Ignition Edge
            using the OPC UA protocol. Gained some basic knowledge on handling
            JSON data.
          </p>
        </div>
        {/* Add more internships similarly */}
      </div>
    </div>
  );
}

export default Internships;
