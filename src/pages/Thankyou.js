import React from "react";
import { Link } from "react-router-dom";

export const Thankyou = () => {
  return (
    <div className="container flex">
      <div className="m-5 p-5">
        <h1 className="text-center">Thankyou</h1>
        <Link to="/" className="btn btn-primary">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
