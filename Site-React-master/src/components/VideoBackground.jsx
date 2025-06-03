import React from "react";
import "./css/VideoBackground.css";
import zi from "./Video/zi.mp4";

function VideoBackground() {
  const divkh = {
    height: "70px"
  };

  return (
    <div>
      <section className="showcase" id="Home">
        <div id="home" className="video-container">
          <video src={zi} autoPlay muted loop></video>
        </div>
        <div className="content">
          <h1>Welcome to Learn React</h1>
          <h3>Upgrade when the future is ready</h3>
          <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="#About">
            Read More
          </a>
        </div>
      </section>
      <div id="About" style={divkh}></div>
    </div>
  );
}

export default VideoBackground;