import "./Journey.css";

import {
  FiSearch,
  FiFileText,
  FiClipboard,
  FiMessageSquare,
  FiAward,
  FiSmile,
} from "react-icons/fi";

/*=========================================
        JOURNEY DATA
=========================================*/

const journeySteps = [

  {
    id: 1,

    icon: <FiSearch />,

    title: "Explore Opportunities",

    description:
      "Discover career paths that align with your skills, interests, and professional aspirations.",

    color: "blue",
  },

  {
    id: 2,

    icon: <FiFileText />,

    title: "Submit Your Resume",

    description:
      "Share your profile with our recruitment team so we can understand your experience and potential.",

    color: "purple",
  },

  {
    id: 3,

    icon: <FiClipboard />,

    title: "Profile Review",

    description:
      "Our hiring specialists carefully review your application to identify the best opportunity.",

    color: "indigo",
  },

  {
    id: 4,

    icon: <FiMessageSquare />,

    title: "Interview Process",

    description:
      "Meet our team through technical and HR discussions where we get to know your strengths.",

    color: "cyan",
  },

  {
    id: 5,

    icon: <FiAward />,

    title: "Final Selection",

    description:
      "Successful candidates receive the next steps and guidance throughout the onboarding process.",

    color: "green",
  },

  {
    id: 6,

    icon: <FiSmile />,

    title: "Welcome to Infynex",

    description:
      "Begin your professional journey in an environment focused on learning, collaboration, and innovation.",

    color: "orange",
  },

];

function Journey() {

  return (

    <section className="career-journey">

      <div className="container">

        <div className="journey-header">

          <span className="section-badge">

            YOUR JOURNEY TO INFYNEX

          </span>

          <h2>

            A Simple & Transparent
            Hiring Journey

          </h2>

          <p>

            We've designed our recruitment process to be
            straightforward, transparent, and focused on
            helping talented professionals find the right
            opportunities to grow with us.

          </p>

        </div>

        <div className="journey-wrapper">

          {journeySteps.map((step, index) => (

            <div
              key={step.id}
              className={`journey-step ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >

              {/* STEP NUMBER */}

              <div className="journey-number">

                {String(step.id).padStart(2, "0")}

              </div>

              {/* ICON */}

              <div
                className={`journey-icon ${step.color}`}
              >

                {step.icon}

              </div>

              {/* CONTENT */}

              <div className="journey-card">

                <h3>

                  {step.title}

                </h3>

                <p>

                  {step.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Journey;