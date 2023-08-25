import React from "react";
import Header from "../components/HeaderComponent/Header";
import HeroBanner from "../components/Banner/HeroBanner";
import Samples from "../components/SampleComponent/Samples";
import ComputerScreen from "../components/ComputerScreen/ComputerScreen";
import Services from "../components/ServicesSection/Services";
import Team from "../components/TeamMembers/Team";
import FancyFooter from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Samples />
      <ComputerScreen />
      <Services />
      <Team />
      <FancyFooter />
    </div>
  );
};

export default HomePage;
