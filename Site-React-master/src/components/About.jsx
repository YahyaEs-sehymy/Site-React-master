import React from "react";
import z from "./img/z.jpg";
import p from "./img/p.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div id="About" className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn my-3" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid rounded w-75 align-self-end"
                src={p}
                alt="About Image 1"
              />
              <img
                className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                src={z}
                alt="About Image 2"
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p
              className="d-inline-block border rounded-pill py-1 px-4"
              style={{
                fontSize: "36px",
                color: "#2a2a72",
                fontWeight: "900",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              About Us
            </p>
            <h1 className=" mb-4">Welcome to Learn React!</h1>
            <p>
              Welcome to your journey of learning React! If you're looking for a
              powerful and efficient way to build interactive and dynamic web
              applications, you've come to the right place. React is a modern
              JavaScript library designed for building stunning and fast user
              interfaces, making it the perfect choice for developers aiming to
              create incredible projects.
            </p>
            <p className="mb-4">
              As you dive into React, you’ll explore key concepts like
              Components, State, and Props, which form the foundation of this
              exciting library. Don’t worry if you’re new—React is built to be
              simple, flexible, and beginner-friendly, with a supportive
              community and plenty of resources to guide you every step of the
              way.
            </p>
            <p className="mb-4">
              Ready to get started? Let’s build the future of web applications
              together! 🚀
            </p>
            <a
              className="btn btn-primary rounded-pill py-3 px-5 mt-3"
              href="https://react.dev/"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
