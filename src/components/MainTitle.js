import React from "react";
import { Link } from "react-router-dom";

export const MainTitle = ({ img, title, subtitle, button, bg }) => {
  return (
    <section
      className={`cloud ${bg === "primary" ? "bg-primary" : "bg-light"} py-2`}
    >
      <div className="container grid">
        <div className="text-center">
          <h2 className="lg">{title}</h2>
          <p className="lead my-1">{subtitle}</p>
          {button && (
            <Link to={button.path} className="btn btn-dark">
              {button.title}
            </Link>
          )}
        </div>
        <img src={img} alt="" />
      </div>
    </section>
  );
};
