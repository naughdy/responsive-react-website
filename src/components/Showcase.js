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
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/thankyou"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
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
            <input type="submit" className="btn btn-primary" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};
