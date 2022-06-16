import React from "react";
import CTA from "../components/cta/CTA";
import Header from "../containers/Header/Header";
import Properties from "../containers/Properties/Properties";
import SellingPoints from "../containers/SellingPoints/SellingPoints";
import Reviews from "../containers/Reviews/Reviews";
import Team from "../containers/Team/Team";

const Home = () => {
  return (
    <>
      <Header />
      <Properties />
      <SellingPoints />
      <Reviews />
      <Team />
      <CTA />
    </>
  );
};

export default Home;
