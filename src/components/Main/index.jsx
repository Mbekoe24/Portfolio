import React from "react";
import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <div className="about-projects-section">
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
