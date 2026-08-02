import "./SoftwareDevelopment.css";

import {
  FaLaptopCode,
  FaBuilding,
  FaGlobe,
  FaMobileAlt,
  FaPlug,
  FaCloud,
  FaLayerGroup,
  FaTools,
  FaSyncAlt,
  FaCheckCircle,
} from "react-icons/fa";

import softwareImage from "../../../assets/software-development.png";

const developmentServices = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Applications",
  },
  {
    icon: <FaLayerGroup />,
    title: "ERP & CRM Solutions",
  },
  {
    icon: <FaGlobe />,
    title: "Web Application Development",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
  },
  {
    icon: <FaPlug />,
    title: "API Development",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Applications",
  },
  {
    icon: <FaLaptopCode />,
    title: "SaaS Product Development",
  },
  {
    icon: <FaTools />,
    title: "Software Maintenance",
  },
  {
    icon: <FaSyncAlt />,
    title: "Legacy Modernization",
  },
];

function SoftwareDevelopment() {

  return (

    <section className="software-section">

      <div className="software-container">

        <div className="software-top">

          {/* Left */}

          <div className="software-content">

            <span className="software-badge">
              SOFTWARE DEVELOPMENT
            </span>

            <h2 className="software-title">
              Transforming Ideas Into
              <span> Digital Solutions</span>
            </h2>

            <p className="software-description">

              We design and develop secure, scalable,
              and future-ready software tailored to
              your business goals.

              From enterprise applications and
              cloud platforms to mobile apps and APIs,
              we deliver innovative technology solutions
              that accelerate digital transformation.

            </p>

            <div className="software-highlights">

              <div>
                <FaCheckCircle />
                <span>Scalable Architecture</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Agile Development</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Secure Applications</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Cloud Ready Solutions</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="software-image">

            <img
              src={softwareImage}
              alt="Software Development"
            />

          </div>

        </div>

        {/* Services */}

        <div className="software-grid">

          {developmentServices.map((service, index) => (

            <div
              key={index}
              className="software-card"
            >

              <div className="software-icon">

                {service.icon}

              </div>

              <h3>

                {service.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default SoftwareDevelopment;