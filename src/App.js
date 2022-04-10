import React from "react";
import "./App.css";
import "./Utilities.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { Docs } from "./pages/Docs";
import { Thankyou } from "./pages/Thankyou";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
};
