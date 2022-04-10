import React from "react";
import { Cli } from "../components/Cli";
import { MainTitle } from "../components/MainTitle";
import { Footer } from "../components/Footer";
import { Languages } from "../components/Languages";
import { Navbar } from "../components/Navbar";
import { Showcase } from "../components/Showcase";
import { Stats } from "../components/Stats";
import cloud from "../components/images/cloud.png";

export const Home = () => {
  return (
    <>
      <Navbar propSelected="Home" />
      <Showcase />
      <Stats />
      <Cli />
      <MainTitle
        img={cloud}
        title="Extreme Cloud Hosting"
        subtitle="Cloud hosting like you've never seen. Fast, efficient and scalable"
        bg="primary"
      />
      <Languages />
      <Footer />
    </>
  );
};
