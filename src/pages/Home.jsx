import Hero from "../components/home/Hero/Hero";
import Services from "../components/home/Services/Services";
import Process from "../components/home/Process/Process";
import WhyInfynex from "../components/home/WhyInfynex/WhyInfynex";
import CTA from "../components/home/CTA/CTA";
import LatestJobs from "../components/home/LatestJobs/LatestJobs";
import JobSeekers from "../components/home/JobSeekers/Jobseekers";
import Employers from "../components/home/Employers/Employers";
import Footer from "../components/common/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Services/>
      <Process/>
      <WhyInfynex/>
      <CTA/>
      <JobSeekers/>
      <Employers/>

    </>
  );
}

export default Home;