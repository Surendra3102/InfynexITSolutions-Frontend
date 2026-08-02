import "./Recruitment.css";

import {
  FaUserTie,
  FaClock,
  FaExchangeAlt,
  FaLaptopHouse,
  FaUsers,
  FaTasks,
  FaUserGraduate,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

const recruitmentServices = [
  {
    icon: <FaUserTie />,
    title: "Permanent Staffing",
    description:
      "Hire highly qualified professionals aligned with your long-term business goals.",
  },
  {
    icon: <FaClock />,
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions for temporary projects and business demands.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Contract-to-Hire",
    description:
      "Evaluate talent before making permanent hiring decisions.",
  },
  {
    icon: <FaLaptopHouse />,
    title: "Remote Hiring",
    description:
      "Build remote teams with skilled professionals across multiple technologies.",
  },
  {
    icon: <FaUsers />,
    title: "Executive Search",
    description:
      "Identify experienced leaders and senior professionals for critical positions.",
  },
  {
    icon: <FaTasks />,
    title: "Recruitment Process Outsourcing",
    description:
      "Complete recruitment management from sourcing to onboarding.",
  },
  {
    icon: <FaBuilding />,
    title: "Bulk Hiring",
    description:
      "Efficient hiring solutions for large-scale recruitment requirements.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Campus Hiring",
    description:
      "Connect with emerging talent through structured campus recruitment drives.",
  },
  {
    icon: <FaGlobe />,
    title: "Offshore Recruitment",
    description:
      "Access global talent while expanding your workforce efficiently.",
  },
];

function Recruitment() {

  return (

    <section className="recruitment-section">

      <div className="recruitment-container">

        <div className="recruitment-header">

          <span className="recruitment-badge">

            IT RECRUITMENT

          </span>

          <h2 className="recruitment-title">

            Hire the Right Talent, Faster

          </h2>

          <p className="recruitment-description">

            Finding the right technology professionals shouldn't slow your business down.

            Infynex delivers highly qualified IT professionals across multiple
            technologies and industries.

          </p>

        </div>

        <div className="recruitment-grid">

          {recruitmentServices.map((service, index) => (

            <div
              className="recruitment-card"
              key={index}
            >

              <div className="recruitment-icon">

                {service.icon}

              </div>

              <div className="recruitment-content">

                <h3>

                  {service.title}

                </h3>

                <p>

                  {service.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Recruitment;