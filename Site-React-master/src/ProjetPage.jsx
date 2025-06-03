import React from "react";
import Header from "./components/Header";
import Projects from "./project/Projects";
import Footer from "./components/Footer";
// import "./Exercice/Exercice.css";

function ProjectPage() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Projects />
      </div>
      <div className="khawi"></div>
      <Footer/>
    </div>
  );
}

export default ProjectPage;