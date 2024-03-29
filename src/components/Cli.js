import React from "react";
import CliImage from "./images/cli.png";
export const Cli = () => {
  return (
    <section className="cli">
      <div className="container grid">
        <img src={CliImage} alt="" />
        <div className="card">
          <h3>Easy to use, cross platform CLI</h3>
        </div>
        <div className="card">
          <h3>Deploy in seconds</h3>
        </div>
      </div>
    </section>
  );
};
