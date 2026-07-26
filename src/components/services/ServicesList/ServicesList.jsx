import "./ServicesList.css";
import services from "./servicesData";
import ServiceCard from "./ServicesCard";

function ServicesList() {
  return (
    <section id="services" className="services-list">

      <div className="container">

        {services.map((service, index) => (

          <ServiceCard
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />

        ))}

      </div>

    </section>
  );
}

export default ServicesList;