import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ propSelected }) => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Nostify</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={propSelected === "Home" ? "selected" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className={propSelected === "Features" ? "selected" : ""}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                className={propSelected === "Docs" ? "selected" : ""}
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
