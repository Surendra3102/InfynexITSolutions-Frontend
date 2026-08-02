import "./WhyChoose.css";

import {
  FaUserTie,
  FaUsers,
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaDollarSign,
  FaComments,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie />,
    title: "Experienced Recruitment Specialists",
    description:
      "Dedicated recruitment experts with industry knowledge and proven hiring experience.",
  },
  {
    icon: <FaUsers />,
    title: "Large IT Talent Pool",
    description:
      "Access to a wide network of highly skilled technology professionals across multiple domains.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Turnaround Time",
    description:
      "Efficient hiring and project delivery to help businesses move faster.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality-Driven Process",
    description:
      "Every candidate and solution goes through a structured quality assessment.",
  },
  {
    icon: <FaCode />,
    title: "Agile Development",
    description:
      "Modern development practices focused on flexibility, collaboration, and rapid delivery.",
  },
  {
    icon: <FaDollarSign />,
    title: "Cost-Effective Engagement",
    description:
      "Flexible engagement models that maximize value while optimizing project costs.",
  },
  {
    icon: <FaComments />,
    title: "Transparent Communication",
    description:
      "Clear collaboration with regular updates throughout recruitment and development.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Customer Support",
    description:
      "Reliable support before, during, and after every engagement.",
  },
];

function WhyChoose() {
  return (
    <section className="service-why-section">

      <div className="service-why-container">

        <div className="service-why-header">

          <span className="service-why-badge">
            WHY CHOOSE INFYNEX
          </span>

          <h2 className="service-why-title">
            Trusted Partner for Talent & Technology
          </h2>

          <p className="service-why-description">
            We combine recruitment expertise with software engineering
            excellence to help organizations build stronger teams,
            deliver innovative digital solutions, and achieve sustainable growth.
          </p>

        </div>

        <div className="service-why-grid">

          {features.map((item, index) => (

            <div
              className="service-why-card"
              key={index}
            >

              <div className="service-why-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;