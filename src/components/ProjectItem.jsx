

import React, { useState } from "react";
import Close from "../components/img/close.svg";

const ProjectItem = ({ img, video, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="project image" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">Title : {title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc, link }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>
                    <div>
                      <span className="item__title">{title}</span>
                      {link ? (
                        <a href={link} className="item__details">
                          On Github
                        </a>
                      ) : (
                        <span className="item__details">{desc}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            {video ? (
              <video className="modal__img" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={img} alt="project image" className="modal__img" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
