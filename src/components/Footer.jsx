import React, { useEffect } from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const scriptModule = document.createElement("script");
    scriptModule.type = "module";
    scriptModule.src =
      "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    document.body.appendChild(scriptModule);

    const scriptNoModule = document.createElement("script");
    scriptNoModule.nomodule = true;
    scriptNoModule.src =
      "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    document.body.appendChild(scriptNoModule);

    return () => {
      document.body.removeChild(scriptModule);
      document.body.removeChild(scriptNoModule);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#About">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#Lessons">
            Lessons
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#Services">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#team">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2025 Saida Daoudi && Mohamed Zaytouni | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;






































// import React, { useEffect } from "react";
// import "./css/Footer.css";

// const Footer = () => {
//   useEffect(() => {
//     const scriptModule = document.createElement("script");
//     scriptModule.type = "module";
//     scriptModule.src =
//       "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
//     document.body.appendChild(scriptModule);

//     const scriptNoModule = document.createElement("script");
//     scriptNoModule.nomodule = true;
//     scriptNoModule.src =
//       "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
//     document.body.appendChild(scriptNoModule);

//     return () => {
//       document.body.removeChild(scriptModule);
//       document.body.removeChild(scriptNoModule);
//     };
//   }, []);

//   return (
//     <footer className="footer">
//       <div className="waves">
//         <div className="wave" id="wave1"></div>
//         <div className="wave" id="wave2"></div>
//         <div className="wave" id="wave3"></div>
//         <div className="wave" id="wave4"></div>
//       </div>
//       <ul className="social-icon">
//         <li className="social-icon__item">
//           <a className="social-icon__link" href="#">
//             <ion-icon name="logo-facebook"></ion-icon>
//           </a>
//         </li>
//         <li className="social-icon__item">
//           <a className="social-icon__link" href="#">
//             <ion-icon name="logo-twitter"></ion-icon>
//           </a>
//         </li>
//         <li className="social-icon__item">
//           <a className="social-icon__link" href="#">
//             <ion-icon name="logo-linkedin"></ion-icon>
//           </a>
//         </li>
//         <li className="social-icon__item">
//           <a className="social-icon__link" href="#">
//             <ion-icon name="logo-instagram"></ion-icon>
//           </a>
//         </li>
//       </ul>
//       <ul className="menu">
//         <li className="menu__item">
//           <a className="menu__link" href="#Home">Home</a>
//         </li>
//         <li className="menu__item">
//           <a className="menu__link" href="#About">About</a>
//         </li>
//         <li className="menu__item">
//           <a className="menu__link" href="#Services">Services</a>
//         </li>
//         <li className="menu__item">
//           <a className="menu__link" href="#team">Team</a>
//         </li>
//         <li className="menu__item">
//           <a className="menu__link" href="#Contact">Contact</a>
//         </li>
//       </ul>
//       <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
//     </footer>
//   );
// };

// export default Footer;
