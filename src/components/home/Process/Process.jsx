import "./Process.css";

import {
  FaClipboardList,
  FaSearch,
  FaUserCheck,
  FaHandshake,
  FaFileSignature,
  FaRocket,
  FaLightbulb,
  FaTasks,
  FaPaintBrush,
  FaLaptopCode,
  FaBug,
  FaCloudUploadAlt,
  FaLifeRing,
} from "react-icons/fa";

const recruitmentProcess = [
  {
    icon: <FaClipboardList />,
    title: "Requirement Analysis",
    desc: "Understand hiring needs, job roles, and business objectives.",
  },
  {
    icon: <FaSearch />,
    title: "Talent Sourcing",
    desc: "Source qualified professionals through multiple recruitment channels.",
  },
  {
    icon: <FaUserCheck />,
    title: "Technical Screening",
    desc: "Evaluate technical expertise and cultural fit.",
  },
  {
    icon: <FaHandshake />,
    title: "Interview Coordination",
    desc: "Schedule and manage interviews with clients and candidates.",
  },
  {
    icon: <FaFileSignature />,
    title: "Offer Management",
    desc: "Handle salary negotiation and offer rollout.",
  },
  {
    icon: <FaRocket />,
    title: "Onboarding Support",
    desc: "Ensure smooth candidate onboarding and joining process.",
  },
];

const developmentProcess = [
  {
    icon: <FaLightbulb />,
    title: "Discovery",
    desc: "Understand project vision, goals, and requirements.",
  },
  {
    icon: <FaTasks />,
    title: "Planning",
    desc: "Prepare project roadmap, milestones, and architecture.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    desc: "Create intuitive and engaging user experiences.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Development",
    desc: "Build scalable, secure, and high-performance applications.",
  },
  {
    icon: <FaBug />,
    title: "Testing",
    desc: "Ensure quality through functional and performance testing.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment",
    desc: "Launch applications on reliable cloud infrastructure.",
  },
  {
    icon: <FaLifeRing />,
    title: "Support",
    desc: "Continuous monitoring, maintenance, and future enhancements.",
  },
];

function Process() {
  return (
    <section className="home-process">

      <div className="container">

        <div className="home-process-heading">

          <span className="home-process-badge">
            OUR PROCESS
          </span>

          <h2>
            How We Deliver Results
          </h2>

          <p>
            Whether you're hiring exceptional talent or building innovative
            software, our structured approach ensures quality, transparency,
            and successful outcomes from start to finish.
          </p>

        </div>

        <div className="home-process-grid">

          {/* Recruitment */}

          <div className="home-process-card">

            <div className="home-process-title">

              <h3>Recruitment Process</h3>

              <p>
                Finding the right people through a proven hiring methodology.
              </p>

            </div>

            <div className="home-process-timeline">

              {recruitmentProcess.map((step, index) => (

                <div
                  className="home-process-step"
                  key={index}
                >

                  <div className="home-process-icon">

                    {step.icon}

                  </div>

                  <div className="home-process-content">

                    <h4>{step.title}</h4>

                    <p>{step.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Development */}

          <div className="home-process-card">

            <div className="home-process-title">

              <h3>Software Development</h3>

              <p>
                Delivering secure and scalable digital solutions using agile
                methodologies.
              </p>

            </div>

            <div className="home-process-timeline">

              {developmentProcess.map((step, index) => (

                <div
                  className="home-process-step"
                  key={index}
                >

                  <div className="home-process-icon">

                    {step.icon}

                  </div>

                  <div className="home-process-content">

                    <h4>{step.title}</h4>

                    <p>{step.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Process;