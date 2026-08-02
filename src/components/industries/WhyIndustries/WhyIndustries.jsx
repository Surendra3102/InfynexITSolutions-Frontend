import "./WhyIndustries.css";

import {
  FaCheckCircle,
  FaBuilding,
  FaUsers,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

const stats = [
  {
    number: "13+",
    label: "Industries Served",
    icon: <FaBuilding />,
  },
  {
    number: "500+",
    label: "Skilled Professionals",
    icon: <FaUsers />,
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: <FaAward />,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <FaHeadset />,
  },
];

const reasons = [
  "Industry-Specific Expertise",
  "Dedicated Account Managers",
  "Fast Recruitment Process",
  "Agile Software Development",
  "Cloud & Digital Transformation",
  "Enterprise Security Standards",
  "Transparent Communication",
  "Long-Term Partnership",
];

function WhyIndustries() {

  return (

    <section className="industry-why">

      <div className="industry-why-container">

        <div className="industry-why-header">

          <span className="industry-why-badge">
            WHY CHOOSE INFYNEX
          </span>

          <h2>
            Trusted Across Multiple Industries
          </h2>

          <p>
            Our commitment to quality, innovation, and customer success
            enables organizations across diverse industries to grow with
            confidence.
          </p>

        </div>

        <div className="industry-why-wrapper">

          <div className="industry-stats">

            {stats.map((item, index) => (

              <div
                className="industry-stat-card"
                key={index}
              >

                <div className="industry-stat-icon">

                  {item.icon}

                </div>

                <h3>{item.number}</h3>

                <span>{item.label}</span>

              </div>

            ))}

          </div>

          <div className="industry-reasons">

            <h3>
              What Makes Infynex Different?
            </h3>

            <p>
              We combine recruitment excellence with modern software
              engineering to help businesses innovate, scale, and stay
              competitive in a rapidly changing digital world.
            </p>

            <div className="industry-check-list">

              {reasons.map((reason, index) => (

                <div key={index}>

                  <FaCheckCircle />

                  <span>{reason}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default WhyIndustries;