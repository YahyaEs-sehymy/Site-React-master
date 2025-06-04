import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/TestimonialCarousel.css";
import l from "./img/l.jpg";
import m from "./img/m.jpg";
import n from "./img/n.jpg";

const divkh = {
  height: "300px"
};
const divkhl = {
  height: "130px"
};

const TestimonialCarousel = () => {
  return (
    <div>
      <div style={divkh}></div>
      <div id='Services' style={divkhl}></div>
      <section className="zi">
        <div className="container">
          <h1 className="section-header">
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Client Review
            </p>{" "}
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          </h1>
          <div className="testimonials">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            <img src={m} alt="Dave Wood" />
                          </div>
                          <div className="bio">
                            <h2>Dave Wood</h2>
                            <h4>Web Developer</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left"></i>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel a eius excepturi molestias !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            <img src={l} alt="Martin Guptill" />
                          </div>
                          <div className="bio">
                            <h2>Martin Guptill</h2>
                            <h4>UI/UX Designer</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left"></i>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel a eius excepturi molestias commodi aliquam
                            error magnam consectetur laboriosam numquam, minima
                            eveniet nostrum sequi saepe ipsam non ea, inventore
                            tenetur!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            <img src={n} alt="Stephen Jones" />
                          </div>
                          <div className="bio">
                            <h2>Stephen Jones</h2>
                            <h4>Graphic Designer</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left"></i>
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel a eius excepturi molestias commodi aliquam
                            error magnam consectetur laboriosam numquam, minima
                            eveniet nostrum sequi saepe ipsam non ea, inventore
                            tenetur!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialCarousel;