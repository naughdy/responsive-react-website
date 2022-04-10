import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DocsMain = () => {
  return (
    <section className="docs-main my-4">
      <div className="container grid">
        <div className="card bg-light p-3 my-2">
          <h3>Essentials</h3>
          <nav>
            <ul>
              <li>
                <a href="docs.html" className="text-primary">
                  Introduction
                </a>
              </li>
              <li>
                <a href="docs.html" className="text-primary">
                  About Nostify
                </a>
              </li>
              <li>
                <a href="docs.html" className="text-primary">
                  Installation{" "}
                </a>
              </li>
            </ul>
          </nav>
          <h3>Depolyment</h3>
          <nav>
            <ul>
              <li>
                <a href="docs.html" className="text-primary">
                  Setting up a container
                </a>
              </li>
              <li>
                <a href="docs.html" className="text-primary">
                  Using the CLI
                </a>
              </li>
              <li>
                <a href="docs.html" className="text-primary">
                  Managing resources
                </a>
              </li>
              <li>
                <a href="docs.html" className="text-primary">
                  Upgrades & Downgrades
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="card">
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illo facere perferendis laborum? Similique recusandae incidunt eos
            dolorum aliquam ipsam unde perspiciatis laudantium totam quam
            laborum velit, at maxime minus?
          </p>
          <div className="alert alert-success">
            <FontAwesomeIcon icon="fa-solid fa-info" className="icon" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            animi?
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            totam magni eius vitae velit id, atque veritatis! At, vero porro.
          </p>
          <a href="installation.html" className="btn btn-primary">
            Install CLI
          </a>
          <h3>Requirements</h3>
          <ul>
            <li>Windows 10, Mac OSX, Linux</li>
            <li>Node.js v12 or higher</li>
          </ul>
          <h3>Install</h3>
          <p>Mac (Homebrew)</p>
          <pre>
            <code>$ brew install nostify-cli</code>
          </pre>
          <p>NPM</p>
          <pre>
            <code>$ brew install nostify-cli</code>
          </pre>
          <p>Yarn</p>
          <pre>
            <code>$ brew install nostify-cli</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
