import React from "react";
import node from "./logos/node.png";
import php from "./logos/php.png";
import python from "./logos/python.png";
import csharp from "./logos/csharp.png";
import ruby from "./logos/ruby.png";
import scala from "./logos/scala.png";
import clojure from "./logos/clojure.png";

export const Languages = () => {
  return (
    <section className="languages">
      <h2 className="md text-center my-2">Supported Languages</h2>
      <div className="container flex">
        <div className="card">
          <h4>Node.js</h4>
          <img src={node} alt="" />
        </div>
        <div className="card">
          <h4>Python</h4>
          <img src={python} alt="" />
        </div>
        <div className="card">
          <h4>C#</h4>
          <img src={csharp} alt="" />
        </div>
        <div className="card">
          <h4>Ruby</h4>
          <img src={ruby} alt="" />
        </div>
        <div className="card">
          <h4>PHP</h4>
          <img src={php} alt="" />
        </div>
        <div className="card">
          <h4>Scala</h4>
          <img src={scala} alt="" />
        </div>
        <div className="card">
          <h4>Clojure</h4>
          <img src={clojure} alt="" />
        </div>
      </div>
    </section>
  );
};
