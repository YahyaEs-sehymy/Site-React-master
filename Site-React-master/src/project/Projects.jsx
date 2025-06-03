

import React from 'react';
import { portfolio } from '../data';
import ProjectItem from '../components/ProjectItem';
import './projects.css';

const Projects = () => {
  return (
    <section className="containerr">
      <h2 className="section__title">
         <span>Projects</span>
      </h2>
      <div className="portfolio__container">
        {portfolio.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
