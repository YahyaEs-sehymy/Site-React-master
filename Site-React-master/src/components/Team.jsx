import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/team.css";
import h from "./img/h.jpg";
// import S from "./img/S.png"
import kk from './img/kk.png'

const divkh = {
  height: "60px"
};

const Team = () => {
  return (
    <div>
      <div id='team' style={divkh}></div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <p
              className="d-inline-block border rounded-pill py-1 px-4"
              style={{
                fontSize: "36px",
                color: "#2a2a72",
                fontWeight: "900",
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              developer
            </p>
            <h1>Web Designer</h1>
          </div>
          <div className="row g-5 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={kk} alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>developer Saida</h5>
                  <p className="text-primary">Department</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="https://www.linkedin.com/in/saida-ed-daoudi-24297229b/">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-square" href="https://github.com/Saida-daoudi">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={h} alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>developer Mohamed</h5>
                  <p className="text-primary">Department</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;