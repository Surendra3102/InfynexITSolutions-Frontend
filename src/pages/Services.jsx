import ServicesHero from "../components/services/ServicesHero/ServicesHero";
import ServicesList from "../components/services/ServicesList/ServicesList";
import WhyChoose from "../components/services/WhyChoose/WhyChoose";
import FAQ from "../components/services/FAQ/FAQ";
import ServicesCTA from "../components/services/ServicesCTA/ServicesCTA";
import Recruitment from "../components/services/Recruitment/Recruitment";
import SoftwareDevelopment from "../components/services/SoftwareDevelopment/SoftwareDevelopment";
function Services() {
  return (
    <>
      <ServicesHero />
      <Recruitment/>
      <SoftwareDevelopment/>
      <WhyChoose/>
      <FAQ/>
      <ServicesCTA/>
    </>
  );
}

export default Services;