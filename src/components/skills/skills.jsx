import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Skills = () => {
  return (
    <section id="skills">
      <h5>Technical Skills</h5>
      <h2>Programming Languages, Technologies & Skills</h2>
      <div className="container skills__container">
        {/* Starts Lanuaguage part */}
        <div className="skills__languages">
          <h3>Programming Languages</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>C</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__knowledgeable">
          {/* Knowledge part starts here */}
          <h3>Hard Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Data Structures & Algorithms</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Object Oriented Programming (OOP) & Design Patterns</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Web Services & Rest APIs</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Machine Learning Algorithms</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Data Science</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Cloud Computing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
