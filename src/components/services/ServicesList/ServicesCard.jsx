import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";

function ServiceCard({ service, reverse }) {
  return (
    <section className={`service-card ${reverse ? "reverse" : ""}`}>

      <div className="service-image">

        <img
          src={service.image}
          alt={service.title}
        />

      </div>

      <div className="service-content">

        <span className="service-subtitle">
          {service.subtitle}
        </span>

        <h2>{service.title}</h2>

        <p>{service.description}</p>

        <ul>

          {service.features.map((feature, index) => (

            <li key={index}>

              <FiCheck />

              {feature}

            </li>

          ))}

        </ul>

        <Link to="/contact" className="service-btn">

          Get Started

          <FiArrowRight />

        </Link>

      </div>

    </section>
  );
}

export default ServiceCard;