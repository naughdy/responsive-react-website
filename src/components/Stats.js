import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center">
          Welcome to the best platform for building applications of all types
          with modern architecture and scaling
        </h3>
        <div className="grid grid-3 text-center my-4">
          <div>
            <FontAwesomeIcon icon="fa-solid fa-server" size="3x" />
            <h3>10,234,234</h3>
            <p className="text-secondary">Deployments</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-upload" size="3x" />
            <h3>923 TB</h3>
            <p className="text-secondary">Published</p>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-project-diagram" size="3x" />
            <h3>2,346,624</h3>
            <p className="text-secondary">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
