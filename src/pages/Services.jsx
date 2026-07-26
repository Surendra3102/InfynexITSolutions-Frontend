import ServicesHero from "../components/services/ServicesHero/ServicesHero";
import ServicesList from "../components/services/ServicesList/ServicesList";
import WhyChoose from "../components/services/WhyChoose/WhyChoose";
import FAQ from "../components/services/FAQ/FAQ";
import ServicesCTA from "../components/services/ServicesCTA/ServicesCTA";
function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList/>
      <FAQ/>
      <ServicesCTA/>
    </>
  );
}

export default Services;