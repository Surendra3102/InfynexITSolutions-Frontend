import "./Process.css";

import {
  FaClipboardList,
  FaSearch,
  FaUserCheck,
  FaHandshake,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaBug,
  FaCloudUploadAlt,
  FaLifeRing,
} from "react-icons/fa";

const recruitmentSteps = [
  {
    icon: <FaClipboardList />,
    title: "Requirement",
  },
  {
    icon: <FaSearch />,
    title: "Talent Sourcing",
  },
  {
    icon: <FaUserCheck />,
    title: "Technical Screening",
  },
  {
    icon: <FaUsers />,
    title: "Interview",
  },
  {
    icon: <FaHandshake />,
    title: "Offer",
  },
  {
    icon: <FaRocket />,
    title: "Onboarding",
  },
];

const developmentSteps = [
  {
    icon: <FaLightbulb />,
    title: "Discovery",
  },
  {
    icon: <FaClipboardList />,
    title: "Planning",
  },
  {
    icon: <FaDraftingCompass />,
    title: "UI / UX",
  },
  {
    icon: <FaCode />,
    title: "Development",
  },
  {
    icon: <FaBug />,
    title: "Testing",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment",
  },
  {
    icon: <FaLifeRing />,
    title: "Support",
  },
];

function Process() {

  return (

    <section className="service-process">

      <div className="service-process-container">

        <div className="service-process-header">

          <span className="service-process-badge">

            OUR PROCESS

          </span>

          <h2 className="service-process-title">

            Simple, Transparent &
            Efficient Workflow

          </h2>

          <p className="service-process-description">

            Whether hiring exceptional IT professionals or
            developing scalable software solutions,
            our proven process ensures quality,
            transparency and successful delivery.

          </p>

        </div>

        {/* Recruitment */}

        <div className="process-block">

          <h3>

            IT Recruitment Process

          </h3>

          <div className="process-steps">

            {recruitmentSteps.map((step, index) => (

              <div
                className="process-step"
                key={index}
              >

                <div className="process-icon">

                  {step.icon}

                </div>

                <span className="process-number">

                  {index + 1}

                </span>

                <h4>

                  {step.title}

                </h4>

              </div>

            ))}

          </div>

        </div>

        {/* Development */}

        <div className="process-block">

          <h3>

            Software Development Process

          </h3>

          <div className="process-steps">

            {developmentSteps.map((step, index) => (

              <div
                className="process-step"
                key={index}
              >

                <div className="process-icon">

                  {step.icon}

                </div>

                <span className="process-number">

                  {index + 1}

                </span>

                <h4>

                  {step.title}

                </h4>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default Process;