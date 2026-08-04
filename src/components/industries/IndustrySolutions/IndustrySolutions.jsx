import "./IndustrySolutions.css";
import { useEffect, useState } from "react";

import {
  FaLaptopCode,
  FaUniversity,
  FaHospital,
  FaShoppingCart,
  FaIndustry,
  FaTruckMoving,
  FaBroadcastTower,
  FaGraduationCap,
  FaShieldAlt,
  FaPills,
  FaCar,
  FaLandmark,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

// Images
import itImage from "../../../assets/industries/it.png";
import bankingImage from "../../../assets/industries/banking.png";
import healthcareImage from "../../../assets/industries/healthcare.png";
import retailImage from "../../../assets/industries/retail.png";
import manufacturingImage from "../../../assets/industries/manufacturing.png";
import logisticsImage from "../../../assets/industries/logistics.png";
import telecomImage from "../../../assets/industries/telecom.png";
import educationImage from "../../../assets/industries/education.png";
import insuranceImage from "../../../assets/industries/insurance.png";
import pharmaImage from "../../../assets/industries/pharma.png";
import automotiveImage from "../../../assets/industries/automotive.png";
import governmentImage from "../../../assets/industries/government.png";
import startupImage from "../../../assets/industries/startup.png";

const industries = [
  {
    name: "Information Technology",
    icon: <FaLaptopCode />,
    image: itImage,
    description:
      "Helping IT companies accelerate growth with expert recruitment, software engineering, cloud solutions, AI, and digital transformation services.",
    services: [
      "IT Recruitment",
      "Software Development",
      "Cloud Solutions",
      "AI & Automation",
    ],
  },
  {
    name: "Banking & Financial Services",
    icon: <FaUniversity />,
    image: bankingImage,
    description:
      "Secure digital platforms and experienced technology professionals for banking and FinTech organizations.",
    services: [
      "FinTech Solutions",
      "Cloud Security",
      "Compliance",
      "Technology Recruitment",
    ],
  },
  {
    name: "Healthcare",
    icon: <FaHospital />,
    image: healthcareImage,
    description:
      "Technology-driven healthcare solutions, medical software development and specialized recruitment services.",
    services: [
      "Healthcare Software",
      "Medical Staffing",
      "Patient Portals",
      "Cloud Infrastructure",
    ],
  },
  {
    name: "Retail & E-Commerce",
    icon: <FaShoppingCart />,
    image: retailImage,
    description:
      "Scalable retail platforms and skilled professionals for modern businesses.",
    services: [
      "E-Commerce",
      "Mobile Apps",
      "Cloud",
      "Recruitment",
    ],
  },
  
  {
    name: "Telecommunications",
    icon: <FaBroadcastTower />,
    image: telecomImage,
    description:
      "Technology solutions and engineering professionals for telecom organizations.",
    services: [
      "Telecom Software",
      "Cloud",
      "Network Solutions",
      "IT Staffing",
    ],
  },
  {
    name: "Education",
    icon: <FaGraduationCap />,
    image: educationImage,
    description:
      "Learning management systems and EdTech platforms.",
    services: [
      "LMS",
      "EdTech",
      "Cloud",
      "Recruitment",
    ],
  },
  {
    name: "Insurance",
    icon: <FaShieldAlt />,
    image: insuranceImage,
    description:
      "Insurance automation platforms and secure digital solutions.",
    services: [
      "Insurance Software",
      "Automation",
      "Cloud",
      "Recruitment",
    ],
  },
  {
    name: "Startups",
    icon: <FaRocket />,
    image: startupImage,
    description:
      "Flexible hiring models and scalable technology solutions.",
    services: [
      "MVP Development",
      "Dedicated Teams",
      "Cloud",
      "Recruitment",
    ],
  },
];

function IndustrySolutions() {

  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (

    <section className="industry-showcase">

      <div className="industry-container">

        <div className="industry-header">

          <span className="industry-badge">
            INDUSTRY SOLUTIONS
          </span>

          <h2>
            Solutions Tailored for Every Industry
          </h2>

          <p>
            We understand every industry's unique challenges and
            deliver recruitment and technology solutions that
            accelerate business growth.
          </p>

        </div>

        <div className="industry-layout">

          <div className="industry-menu">

            {industries.map((industry, index) => (

              <div
                className="industry-mobile-item"
                key={index}
              >

                <button
                  className={`industry-button ${
                    activeIndustry === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndustry(index)}
                  onMouseEnter={() => !isMobile && setActiveIndustry(index)}
                >

                  {industry.icon}

                  <span>{industry.name}</span>

                </button>

                {isMobile && activeIndustry === index && (

                  <div className="industry-mobile-content">

                    <img
                      src={industry.image}
                      alt={industry.name}
                    />

                    <div className="industry-content">

                      <h3>{industry.name}</h3>

                      <p>{industry.description}</p>

                      <div className="industry-services">

                        {industry.services.map((service, i) => (

                          <div key={i}>

                            <FaCheckCircle />

                            <span>{service}</span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

          {!isMobile && (

            <div className="industry-preview">

              <img
                src={industries[activeIndustry].image}
                alt={industries[activeIndustry].name}
              />

              <div className="industry-content">

                <h3>{industries[activeIndustry].name}</h3>

                <p>{industries[activeIndustry].description}</p>

                <div className="industry-services">

                  {industries[activeIndustry].services.map(
                    (service, index) => (

                      <div key={index}>

                        <FaCheckCircle />

                        <span>{service}</span>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>

  );
}

export default IndustrySolutions;