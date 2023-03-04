import React from "react";
import MainIntroGap from "../Main/MainIntroGap";
import MainHero from "../Main/MainHero";
import MainServiceGap from "../Main/MainServiceGap";
import MainPlansPricing from "../Main/MainPlansPricing";
import MainTestomonials from "../Main/MainTestomonials";
import MainSplashArea from "../Main/MainSplashArea";
import MainTeam from "../Main/MainTeam";

function Main() {
  return (
    <div>
      <MainHero />
      <MainIntroGap />
      <MainServiceGap />
      <MainPlansPricing />
      <MainTestomonials />
      <MainSplashArea />
      <MainTeam />
    </div>
  );
}

export default Main;
