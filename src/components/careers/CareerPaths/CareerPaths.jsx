import "./CareerPaths.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FiCode,
  FiUsers,
  FiTrendingUp,
  FiCloud,
  FiPenTool,
  FiBarChart2,
  FiSettings,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

/* Images */

import softwareImg from "../../../assets/careers/software-development.png";
import hrImg from "../../../assets/careers/human-resources.png";
import businessImg from "../../../assets/careers/business-development.png";
import cloudImg from "../../../assets/careers/cloud-devops.png";
import designImg from "../../../assets/careers/uiux-design.png";
import marketingImg from "../../../assets/careers/digital-marketing.png";
import operationsImg from "../../../assets/careers/operations.png";

/*=========================================
        CAREER PATHS DATA
=========================================*/

const careerPaths = [

  {
    id:1,

    title:"Software Development",

    icon:<FiCode />,

    image:softwareImg,

    description:
      "Design and develop modern digital products, enterprise software, cloud-native applications, and scalable business solutions using the latest technologies.",

    skills:[
      "Frontend Development",
      "Backend Engineering",
      "Full Stack Development",
      "Quality Assurance"
    ]
  },

  {
    id:2,

    title:"Human Resources",

    icon:<FiUsers />,

    image:hrImg,

    description:
      "Help organizations build exceptional teams by identifying, attracting, and nurturing top talent across multiple industries.",

    skills:[
      "Talent Acquisition",
      "Recruitment",
      "Employee Engagement",
      "HR Operations"
    ]
  },

  {
    id:3,

    title:"Business Development",

    icon:<FiTrendingUp />,

    image:businessImg,

    description:
      "Drive business growth by building client relationships, identifying opportunities, and delivering innovative workforce solutions.",

    skills:[
      "Client Management",
      "Lead Generation",
      "Market Research",
      "Business Strategy"
    ]
  },

  {
    id:4,

    title:"Cloud & DevOps",

    icon:<FiCloud />,

    image:cloudImg,

    description:
      "Build scalable cloud infrastructure, automate deployments, and optimize application performance using modern DevOps practices.",

    skills:[
      "AWS & Azure",
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "Cloud Security"
    ]
  },

  {
    id:5,

    title:"UI / UX Design",

    icon:<FiPenTool />,

    image:designImg,

    description:
      "Create intuitive, engaging, and visually stunning digital experiences that delight users across web and mobile platforms.",

    skills:[
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping"
    ]
  },

  {
    id:6,

    title:"Digital Marketing",

    icon:<FiBarChart2 />,

    image:marketingImg,

    description:
      "Plan and execute digital campaigns that strengthen brand presence, engage audiences, and generate measurable business growth.",

    skills:[
      "SEO",
      "Social Media",
      "Performance Marketing",
      "Content Strategy"
    ]
  },

  {
    id:7,

    title:"Operations",

    icon:<FiSettings />,

    image:operationsImg,

    description:
      "Ensure seamless business operations by managing processes, resources, quality standards, and organizational efficiency.",

    skills:[
      "Process Management",
      "Coordination",
      "Quality Control",
      "Business Operations"
    ]
  },

];
function CareerPaths() {

  const [active, setActive] = useState(0);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {

    const handleResize = () => {

      setIsMobile(window.innerWidth <= 768);

    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  const handleClick = (index) => {

    if (isMobile) {

      setActive(
        active === index ? null : index
      );

    } else {

      setActive(index);

    }

  };

  return (

    <section
      className="career-paths"
      id="career-domains"
    >

      <div className="container">

        <div className="career-paths-header">

          <span className="section-badge">

            EXPLORE CAREER PATHS

          </span>

          <h2>

            Find Your
            Perfect Career Path

          </h2>

          <p>

            Whether you're passionate about
            technology, recruitment,
            business, design or operations,
            Infynex offers opportunities
            where your skills can grow
            and create meaningful impact.

          </p>

        </div>

        <div className="career-paths-layout">

          {/* LEFT MENU */}

          <div className="career-paths-menu">

            {careerPaths.map((item, index) => (

              <div
                key={item.id}
                className="career-mobile-item"
              >

                <button

                  className={`career-path-button ${
                    active === index
                      ? "active"
                      : ""
                  }`}

                  onClick={() =>
                    handleClick(index)
                  }

                  onMouseEnter={() => {

                    if (!isMobile) {

                      setActive(index);

                    }

                  }}

                >

                  <div className="career-path-icon">

                    {item.icon}

                  </div>

                  <span>

                    {item.title}

                  </span>

                </button>

                {/* MOBILE ACCORDION */}

                {isMobile &&
                  active === index && (

                  <div className="career-mobile-content">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="career-path-content">

                      <h3>

                        {item.title}

                      </h3>

                      <p>

                        {item.description}

                      </p>

                      <div className="career-skill-list">

                        {item.skills.map(
                          (
                            skill,
                            i
                          ) => (

                            <div key={i}>

                              <FiCheckCircle />

                              <span>

                                {skill}

                              </span>

                            </div>

                          )
                        )}

                      </div>

                      <Link
                        to="/contact"
                        className="career-path-btn"
                      >

                        Explore Opportunities

                        <FiArrowRight />

                      </Link>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* DESKTOP PREVIEW */}

          {!isMobile &&
            active !== null && (

            <div className="career-preview">

              <img
                src={
                  careerPaths[active].image
                }
                alt={
                  careerPaths[active].title
                }
              />

              <div className="career-path-content">

                <h3>

                  {careerPaths[active].title}

                </h3>

                <p>

                  {
                    careerPaths[active]
                      .description
                  }

                </p>

                <div className="career-skill-list">

                  {careerPaths[
                    active
                  ].skills.map(
                    (
                      skill,
                      index
                    ) => (

                      <div
                        key={index}
                      >

                        <FiCheckCircle />

                        <span>

                          {skill}

                        </span>

                      </div>

                    )
                  )}

                </div>

                <Link
                  to="/contact"
                  className="career-path-btn"
                >

                  Explore Opportunities

                  <FiArrowRight />

                </Link>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>

  );

}

export default CareerPaths;