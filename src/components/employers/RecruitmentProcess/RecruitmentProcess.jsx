import "./RecruitmentProcess.css";

import {
  FaClipboardList,
  FaSearch,
  FaUserCheck,
  FaComments,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

const process = [

  {
    icon: <FaClipboardList />,
    title: "Requirement Analysis",
    description:
      "We understand your hiring goals, company culture, job requirements, and workforce planning.",
  },

  {
    icon: <FaSearch />,
    title: "Talent Sourcing",
    description:
      "Our recruiters identify qualified candidates through multiple trusted sourcing channels.",
  },

  {
    icon: <FaUserCheck />,
    title: "Screening & Validation",
    description:
      "Every profile undergoes technical evaluation, resume verification, and quality screening.",
  },

  {
    icon: <FaComments />,
    title: "Interview Coordination",
    description:
      "We manage interview scheduling, candidate communication, and employer feedback.",
  },

  {
    icon: <FaHandshake />,
    title: "Offer Management",
    description:
      "Offer discussions, salary negotiations, documentation, and candidate engagement.",
  },

  {
    icon: <FaRocket />,
    title: "Successful Onboarding",
    description:
      "We ensure a smooth onboarding process while supporting both employer and candidate.",
  },

];

function RecruitmentProcess() {

  return (

    <section className="recruitment-process">

      <div className="container">

        <div className="process-header">

          <span className="section-badge">

            OUR PROCESS

          </span>

          <h2>

            A Recruitment Process
            Designed for Faster Hiring

          </h2>

          <p>

            Every hiring engagement follows a structured process that
            ensures quality candidates, faster turnaround times,
            and a seamless recruitment experience.

          </p>

        </div>

        <div className="process-grid">

          {process.map((step, index) => (

            <div
              className="process-card"
              key={index}
            >

              <div className="process-number">

                {(index + 1).toString().padStart(2, "0")}

              </div>

              <div className="process-icon">

                {step.icon}

              </div>

              <h3>

                {step.title}

              </h3>

              <p>

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default RecruitmentProcess;