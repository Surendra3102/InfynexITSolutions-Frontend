import "./Process.css";
import {
  FiSearch,
  FiUsers,
  FiUserCheck,
  FiCheckCircle,
} from "react-icons/fi";

const processData = [
  {
    id: 1,
    icon: <FiSearch />,
    title: "Understand Requirement",
    description:
      "Deep-dive consultation to map job roles, team culture, and hiring timelines.",
  },
  {
    id: 2,
    icon: <FiUsers />,
    title: "Source Candidates",
    description:
      "Multi-channel sourcing across job portals, referrals, and our talent database.",
  },
  {
    id: 3,
    icon: <FiUserCheck />,
    title: "Screen & Interview",
    description:
      "Structured assessments, technical evaluations, and behavioral interviews.",
  },
  {
    id: 4,
    icon: <FiCheckCircle />,
    title: "Successful Placement",
    description:
      "Offer management, onboarding support, and post-placement follow-up.",
  },
];

function Process() {
  return (
    <section className="process">

      <div className="container">

        <div className="section-heading">

          <span className="section-badge">OUR PROCESS</span>

          <h2>How We Work</h2>

          <p>
            A structured, transparent process that delivers the right hire —
            every time.
          </p>

        </div>

        <div className="process-wrapper">

          <div className="timeline"></div>

          {processData.map((item) => (
            <div className="process-item" key={item.id}>

              <div className="circle">

                <div className="step-number">{item.id}</div>

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;