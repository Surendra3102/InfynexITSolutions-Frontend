import "./Jobseekers.css";
import {
  FiSearch,
  FiFileText,
  FiUsers,
  FiZap,
  FiArrowRight
} from "react-icons/fi";
import { Link } from "react-router-dom";
import candidateImage from "../../../assets/job-seeker.png";

const features = [
  {
    icon: <FiSearch />,
    title: "Smart Job Matching",
    description:
      "AI-powered role recommendations based on your skills and career goals."
  },
  {
    icon: <FiFileText />,
    title: "Free Resume Review",
    description:
      "Expert feedback to make your profile stand out to top employers."
  },
  {
    icon: <FiUsers />,
    title: "Interview Preparation",
    description:
      "Mock interviews, tips, and guidance from domain experts."
  },
  {
    icon: <FiZap />,
    title: "Fast Applications",
    description:
      "One-click apply across hundreds of verified openings."
  }
];

function JobSeekers() {

  return (

    <section className="job-seekers">

      <div className="container seekers-grid">

        <div className="seekers-image">

          <img src={candidateImage} alt="Job Seekers" />

          <div className="candidate-card">

            <h3>200K+</h3>

            <p>Active Candidates</p>

          </div>

        </div>

        <div className="seekers-content">

          <span className="section-badge">

            FOR JOB SEEKERS

          </span>

          <h2>

            Land Your Dream Job with Infynex

          </h2>

          <p className="intro">

            We don't just find you a job — we build your career.
            Our dedicated career counselors work with you from
            resume to offer letter.

          </p>

          <div className="features-list">

            {features.map((feature, index) => (

              <div className="feature-item" key={index}>

                <div className="feature-icon">

                  {feature.icon}

                </div>

                <div>

                  <h4>{feature.title}</h4>

                  <p>{feature.description}</p>

                </div>

              </div>

            ))}

          </div>

          <Link to="/login" className="job-profile-link" style={{textDecoration:"none"}}><button className="profile-btn">

            Create Free Profile

            <FiArrowRight />

          </button></Link>

        </div>

      </div>

    </section>

  );

}

export default JobSeekers;