import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Import your CSS styles

function App() {
  return (
    <div className="w3-black">
      <Sidebar />
      <div className="w3-padding-large" id="main">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Internships />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
