import React from "react";
import { MainTitle } from "../components/MainTitle";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import docs from "../components/images/docs.png";
import { DocsMain } from "../components/DocsMain";

export const Docs = () => {
  return (
    <>
      <Navbar propSelected="Docs" />
      <MainTitle
        img={docs}
        title="Docs"
        subtitle="Learn how to work with the Loruki platform"
        bg="primary"
      />
      <DocsMain />
      <Footer />
    </>
  );
};
