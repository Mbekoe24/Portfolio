import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}
