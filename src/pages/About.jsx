import AboutHero from "../components/about/AboutHero/AboutHero";
import CompanyStory from "../components/about/CompanyStory/CompanyStory";
import MissionVision from "../components/about/MissionVision/MissionVision";
import CoreValues from "../components/about/CoreValues/CoreValues";
import Journey from "../components/about/Journey/Journey";
import AboutCTA from "../components/about/AboutCTA/AboutCTA";
function About() {
  return (
    <>
      <AboutHero />
      <CompanyStory/>
      <MissionVision/>
      <Journey/>
      <AboutCTA/>
    </>
  );
}

export default About;