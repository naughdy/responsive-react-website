import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Nostify</h1>
          <p>Copyright &copy; 2022</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Feature</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="social.html">
            <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
          </a>
          <a href="social.html">
            <FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" />
          </a>
          <a href="social.html">
            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
          </a>
          <a href="social.html">
            <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};
