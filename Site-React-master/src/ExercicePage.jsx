import React from "react";
import Header from "./components/Header";
import Exercice from "./Exercice/Exercice";
import "./Exercice/Exercice.css";
import Footer from "./components/Footer";

function ExercicePage() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Exercice />
      </div>
      <div className="khawi"></div>
      <Footer/>
    </div>
  );
}

export default ExercicePage;