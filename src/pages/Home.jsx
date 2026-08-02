import Hero from "../components/home/Hero/Hero";
import Services from "../components/home/Services/Services";
import Process from "../components/home/Process/Process";
import WhyInfynex from "../components/home/WhyInfynex/WhyInfynex";
import CTA from "../components/home/CTA/CTA";
import JobSeekers from "../components/home/JobSeekers/Jobseekers";
import Employers from "../components/home/Employers/Employers";
import Footer from "../components/common/Footer/Footer";
import Technologies from "../components/home/Technologies/Technologies";
import Industries from "../components/home/Industries/Industries";

function Home() {
  return (
    <>
      <Hero />
      <Services/>
      <WhyInfynex/>
      <Technologies/>
      <Process/>
      <Industries/>
      <CTA/>
    </>
  );
}

export default Home;