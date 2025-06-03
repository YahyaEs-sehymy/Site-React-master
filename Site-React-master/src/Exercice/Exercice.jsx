import React, { useState } from 'react'; 
import './Exercice.css';
import ExerciceCorection from '../ExerciceCorection';


function Exercice() {
  const [isZoomed, setIsZoomed] = useState(false);  
  const [zoomedImage, setZoomedImage] = useState(''); 
  const [NewPage, setNewPage] = useState(false); 

  const projects = [
    { id: 1, src: '/Exercices/Ex1.png', alt: 'Project 1' },
    { id: 2, src: '/Exercices/Ex2.png', alt: 'Project 2' },
    { id: 3, src: '/Exercices/Ex3.png', alt: 'Project 3' },
    { id: 4, src: '/Exercices/Ex4.png', alt: 'Project 4' },
    { id: 5, src: '/Exercices/Ex5.png', alt: 'Project 5' },
    { id: 6, src: '/Exercices/Ex6.png', alt: 'Project 6' }
  ];

  function handleViewMore () {
    setNewPage(true);
  };

  const handleImageClick = (src) => {
    setZoomedImage(src);
    setIsZoomed(true); 
  };

  const handleCloseZoom = () => {
    setIsZoomed(false); 
  };

  return (
    <div>
    {NewPage && <ExerciceCorection/>}
      {!NewPage && (
        <div>
      
    <section className="section" id="projects">
      <header className="top-header">
        <h1 className="Exercice">Les Exercices</h1>
      </header>
      
      <div className="project-container">
        {projects.slice(0, 3).map((project) => (
          <div className="project-box" key={project.id}>
            <img 
              src={project.src} 
              alt={project.alt} 
              onClick={() => handleImageClick(project.src)} 
            />
            <div className="zoom-icon">
              <i className="fa fa-search-plus" />
            </div>
          </div>
        ))}
      </div>
        <div className="project-container">
          {projects.slice(3).map((project) => (
            <div className="project-box" key={project.id}>
              <img 
                src={project.src} 
                alt={project.alt} 
                onClick={() => handleImageClick(project.src)} 
              />
              <div className="zoom-icon">
                <i className="fa fa-search-plus" />
              </div>
            </div>
          ))}
        </div>

      {isZoomed && (
        <div className="zoomed-image-container" onClick={handleCloseZoom}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
          <span className="close-zoom" onClick={handleCloseZoom}>x</span>
        </div>
      )}

      <div className="download-button-container">
        <button 
          className="download-button" 
          onClick={handleViewMore} 
        >
          View more
        </button>
      </div>
    </section>
    </div>
     )}
    </div>
  );
}
export default Exercice;