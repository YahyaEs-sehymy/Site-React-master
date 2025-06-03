import React from "react";
import './pdf.css';

const divkh = {
  height: "130px",
  color:"red"
};


function Pdf() {
  // This function will be triggered when the button is clicked to download the PDF
  const handleDownloadPdf = (pdfSrc, alt) => {
    // Create a link element dynamically to trigger the download of the PDF file
    const link = document.createElement('a');
    link.href = pdfSrc; // Set the PDF file source (not the image source)
    link.download = alt; // Set the name for the downloaded file
    link.click(); // Trigger the download
  };

  // Sample image data for the PDF download (image src and PDF src)
  const projects = [
    {
      imageSrc: "Exercices/PdfReact.png", // Image for preview
      pdfSrc: "Exercices/Resume Formateur Said Mehdad.pdf", // PDF file to download
      alt: "Resume Formateur Said Mehdad" // Downloaded file name
    },
    {
      imageSrc: "Exercices/IstaReact.png", // Image for preview
      pdfSrc: "Exercices/Cours Ista.pdf", // PDF file to download
      alt: "Cours Ista" // Downloaded file name
    },
    {
      imageSrc: "Exercices/PdfReact.png", // Image for preview
      pdfSrc: "Exercices/Resume Formateur Said Mehdad.pdf", // PDF file to download
      alt: "Resume Formateur Said Mehdad" // Downloaded file name
    }
  ];

  return (
    <div className="ccc">
        {/* <div className="khawi"></div> */}
      {projects.map((project, index) => (
        <div className="projectt-box" key={index}>
          <div className="img">
            <img
              src={project.imageSrc} // This is the image preview
              alt={project.alt}
              onClick={() => console.log(`Image clicked: ${project.imageSrc}`)} // Handle image click event (optional)
            />
            <div className="zoom-icon">
              <i className="fa fa-search-plus" />
            </div>
          </div>

          <footer className="title-telechrger">
            <span className="span">
              <b>{project.alt}</b>
            </span>
            <button
              className="download-pdf-buttonn"
              onClick={() => handleDownloadPdf(project.pdfSrc, project.alt)} // Handle PDF download
            >
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                <path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/>
              </svg>
            </button>
          </footer>
        </div>
      ))}
      <div style={divkh}></div>
    </div>
  );
}

export default Pdf;
