import React from "react";
import "./about.css";
import ME from "../../assets/about-me.JPG";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Graduate of Master of Computer Applications (MCA) with a strong
            focus on user experience, a hands-on, high-energy approach, and
            well-developed Agile methodology capabilities. Have developed a
            number of web applications and softwares, including a Face
            Recognition Student Management System using Python and real time
            E-Commerce Website with React and TypeScript.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
