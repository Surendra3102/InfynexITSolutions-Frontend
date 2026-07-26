import "./EmployerModels.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import employerModelsData from "./employerModelsData";

function EmployerModels() {
  return (
    <section className="employer-models">

      <div className="container">

        <span className="employer-models-badge">
          ENGAGEMENT MODELS
        </span>

        <h2 className="employer-models-title">
          Choose How You Work with Us
        </h2>

        <p className="employer-models-description">
          Flexible recruitment solutions designed to meet your hiring
          requirements, whether you're filling a single role or building an
          entire team.
        </p>

        <div className="employer-models-grid">

          {employerModelsData.map((item) => (

            <div
              key={item.id}
              className={`employer-model-card ${
                item.featured ? "featured" : ""
              }`}
            >

              {item.badge && (
                <span className="model-badge">
                  {item.badge}
                </span>
              )}

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link to={item.link}>
                Learn More
                <FiArrowRight />
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default EmployerModels;