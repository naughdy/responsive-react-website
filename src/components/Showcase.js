import React from "react";
import { Link } from "react-router-dom";

export const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text p-2">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps of all kinds, from large scale enterprise APIs to
            static websites for individuals. Fill out the form to try a demo of
            our platform
          </p>
          <Link to="/features" className="btn btn-outline">
            Read More
          </Link>
        </div>
        <div className="showcase-form card">
          <h2>Request a Demo</h2>
          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <link className="btn btn-primary" to="/thankyou">
              Send
            </link>
          </form>
        </div>
      </div>
    </section>
  );
};
