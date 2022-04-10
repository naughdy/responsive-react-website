import React from "react";
import { MainTitle } from "../components/MainTitle";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import server from "../components/images/server.png";
import server2 from "../components/images/server2.png";
import { Grid } from "../components/Grid";

export const Features = () => {
  return (
    <>
      <Navbar propSelected="Features" />
      <MainTitle
        img={server}
        title="Features"
        subtitle="Check out the features of Loruki that separate us from the competition"
        bg="primary"
      />
      <MainTitle
        img={server2}
        title="The Nostify Platform"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!"
        bg="light"
      />
      <Grid />
      <Footer />
    </>
  );
};
