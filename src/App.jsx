import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/portfolio";

import Skills from "./components/skills/skills";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />

      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
