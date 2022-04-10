import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Grid = () => {
  return (
    <section className="features-main my-2">
      <div className="container grid grid-3">
        <div className="card flex">
          <FontAwesomeIcon
            icon="fa-solid fa-server"
            className="icon"
            size="3x"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem
            ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum?
            Necessitatibus!
          </p>
        </div>
        <div className="card flex">
          <FontAwesomeIcon
            icon="fa-solid fa-sitemap"
            className="icon"
            size="3x"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <FontAwesomeIcon
            icon="fa-solid fa-laptop-code"
            className="icon"
            size="3x"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            magnam.
          </p>
        </div>
        <div className="card flex">
          <FontAwesomeIcon
            icon="fa-solid fa-database"
            className="icon"
            size="3x"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
          </p>
        </div>
        <div className="card flex">
          <FontAwesomeIcon
            icon="fa-solid fa-power-off"
            className="icon"
            size="3x"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            magnam.
          </p>
        </div>
        <div className="card flex">
          <FontAwesomeIcon
            icon="fa-solid fa-upload"
            className="icon"
            size="3x"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            magnam.
          </p>
        </div>
      </div>
    </section>
  );
};
