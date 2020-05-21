import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}
