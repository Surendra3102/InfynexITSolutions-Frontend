import "./EmployerModels.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaBuilding,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

/* Images */

import permanentImg from "../../../assets/employers/permanent.png";
import contractImg from "../../../assets/employers/contract.png";
import c2hImg from "../../../assets/employers/contract-hire.png";
import rpoImg from "../../../assets/employers/rpo.png";
import offshoreImg from "../../../assets/employers/offshore.png";

/*====================================================
                HIRING MODELS
====================================================*/

const models = [

  {
    id:1,

    title:"Permanent Staffing",

    icon:<FaUserTie />,

    image:permanentImg,

    description:
      "Build a strong long-term workforce with carefully screened professionals who align with your company culture, technical requirements, and business goals.",

    benefits:[
      "Experienced Professionals",
      "Leadership Hiring",
      "Culture Fit Recruitment",
      "End-to-End Hiring",
    ],
  },

  {
    id:2,

    title:"Contract Staffing",

    icon:<FaUsers />,

    image:contractImg,

    description:
      "Scale your workforce quickly with flexible contract staffing solutions designed for projects, seasonal demand, and business expansion.",

    benefits:[
      "Quick Deployment",
      "Flexible Workforce",
      "Project-Based Hiring",
      "Cost Optimization",
    ],
  },

  {
    id:3,

    title:"Contract-to-Hire",

    icon:<FaHandshake />,

    image:c2hImg,

    description:
      "Evaluate candidates in a real working environment before making permanent hiring decisions, reducing recruitment risk.",

    benefits:[
      "Reduced Hiring Risk",
      "Performance Evaluation",
      "Flexible Hiring",
      "Better Retention",
    ],
  },

  {
    id:4,

    title:"Recruitment Process Outsourcing",

    icon:<FaBuilding />,

    image:rpoImg,

    description:
      "Our dedicated recruitment specialists manage your complete hiring lifecycle, helping you fill positions faster while maintaining quality.",

    benefits:[
      "Dedicated Recruiters",
      "Talent Pipeline",
      "Bulk Hiring",
      "Faster Recruitment",
    ],
  },

  {
    id:5,

    title:"Offshore Recruitment",

    icon:<FaGlobe />,

    image:offshoreImg,

    description:
      "Access highly skilled global professionals and build distributed teams that support your business across multiple regions and time zones.",

    benefits:[
      "Global Talent Access",
      "Remote Teams",
      "Time Zone Coverage",
      "Cost-Effective Hiring",
    ],
  },

];
function EmployerModels() {

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

    <section className="employer-models">

      <div className="container">

        <div className="employer-model-header">

          <span className="section-badge">

            HIRING MODELS

          </span>

          <h2>

            Flexible Hiring Solutions
            for Every Business

          </h2>

          <p>

            Whether you're hiring a single
            specialist or building an entire
            department, Infynex provides
            flexible hiring models tailored
            to your business objectives.

          </p>

        </div>

        <div className="employer-model-layout">

          {/* LEFT SIDE */}

          <div className="employer-model-menu">

            {models.map((item, index) => (

              <div
                key={item.id}
                className="model-mobile-item"
              >

                <button

                  className={`model-button ${
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

                  {item.icon}

                  <span>

                    {item.title}

                  </span>

                </button>

                {isMobile &&
                  active === index && (

                  <div className="model-mobile-content">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="model-content">

                      <h3>

                        {item.title}

                      </h3>

                      <p>

                        {item.description}

                      </p>

                      <div className="model-benefits">

                        {item.benefits.map(
                          (
                            benefit,
                            i
                          ) => (

                            <div key={i}>

                              <FaCheckCircle />

                              <span>

                                {benefit}

                              </span>

                            </div>

                          )
                        )}

                      </div>

                      <Link
                        to="/contact"
                        className="model-btn"
                      >

                        Request Talent

                        <FaArrowRight />

                      </Link>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* RIGHT SIDE */}

          {!isMobile &&
            active !== null && (

            <div className="model-preview">

              <img
                src={
                  models[active].image
                }
                alt={
                  models[active].title
                }
              />

              <div className="model-content">

                <h3>

                  {models[active].title}

                </h3>

                <p>

                  {
                    models[active]
                      .description
                  }

                </p>

                <div className="model-benefits">

                  {models[
                    active
                  ].benefits.map(
                    (
                      benefit,
                      index
                    ) => (

                      <div
                        key={index}
                      >

                        <FaCheckCircle />

                        <span>

                          {benefit}

                        </span>

                      </div>

                    )
                  )}

                </div>

                <Link
                  to="/contact"
                  className="model-btn"
                >

                  Request Talent

                  <FaArrowRight />

                </Link>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>

  );

}

export default EmployerModels;