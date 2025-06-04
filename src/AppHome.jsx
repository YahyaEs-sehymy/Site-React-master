import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Login from "./components/Login";
import VideoBackground from "./components/VideoBackground";
import Pdf from '../src/Blog/pdf'
import About from "./components/About";
import Team from "./components/Team";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import Contact3D from "./components/Contact3D";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Video from "./components/Video";
// import Projects from "./project/Projects";
function AppHome() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleLogin = () => setIsLoginVisible(!isLoginVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header onSearchClick={toggleSearch} onLoginClick={toggleLogin} />
      {isSearchVisible && (
        <Search isVisible={isSearchVisible} onClose={toggleSearch} />
      )}
      {isLoginVisible && (
        <div>
          <Login isVisible={isLoginVisible} onClose={toggleLogin} />
        </div>
      )}
      <VideoBackground />
      <About />
      <Video />
      <Pdf/>
      {/* <Projects /> */}
      <TestimonialCarousel />
      {/* <Team /> */}
      <Contact3D />
      <Footer />
      <a
        href="#"
        className={`btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top ${
          showBackToTop ? "show" : ""
        }`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default AppHome;