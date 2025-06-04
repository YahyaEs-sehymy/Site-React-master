

import React, { useState } from 'react';
import "./css/Contact3D.css";
import "bootstrap/dist/css/bootstrap.min.css";
import k from "./img/k.png";
import { FaCheckCircle } from 'react-icons/fa';

const Contact3D = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    setEmail("");
    setName("");
    setMessage("");
  };

  const divkh = {
    height: "50px"
  };

  return (
    <div>
      <div id='Contact' style={divkh}></div>
      <section className="uf-contact-form-01 mx-auto">
        <div className="container">
          <div className="row justify-content-center bg-white rounded-4 shadow py-5 gx-5 px-lg-5">
            <div className="col-md-6 text-center">
              <h2 className="uf-ct-016-text-primary text-uppercase fw-bold">
                Contact Us
              </h2>
              <p>
                Or reach out manually to{" "}
                <a
                  href="mailto:uifresh.net@gmail.com"
                  className="text-decoration-none"
                >
                  uifresh.net@gmail.com
                </a>
              </p>
              <img
                src={k}
                alt=""
                className="uf-img-contact-form-01 pt-4 d-md-block d-none"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="uf-imail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="uf-imail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text uf-ct-01-text-primary">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="uf-iname" className="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="uf-iname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="uf-itextarea" className="form-label">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="uf-itextarea"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-lg uf-ct-01-btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showNotification && (
        <div className="notification">
          <div className="alert alert-success d-flex align-items-center" role="alert">
            <FaCheckCircle className="me-2" style={{ color: 'green' }} />
            <div>Your message has been sent successfully!</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact3D;

