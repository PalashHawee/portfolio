import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/management.PNG";
import IMG2 from "../../assets/commerce.PNG";
import IMG3 from "../../assets/studentManage.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Face Recognition System",
    github: "https://github.com/PalashHawee/Face-Recognition-System",
    demo: "https://www.youtube.com/watch?v=yBqUcTosCCk&t=75s",
  },
  {
    id: 2,
    image: IMG2,
    title: "Indigenous Clothing",
    github: "https://github.com/PalashHawee/indigenous-clothing",
    demo: "https://indigenous-clothing.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Student Management System",
    github: "https://github.com/PalashHawee/Management-System",
    demo: "https://www.youtube.com/watch?v=yBqUcTosCCk&t=75s",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
