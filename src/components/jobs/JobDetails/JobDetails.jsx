import "./JobDetails.css";
import { useParams, Link } from "react-router-dom";
import {
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiArrowLeft,
  FiCheckCircle,
  FiBookmark,
  FiShare2,
  FiCalendar,
} from "react-icons/fi";

import jobsData from "../../../data/jobsData";

function JobDetails() {

  const { id } = useParams();

  const job = jobsData.find(
    (item) => item.id === Number(id)
  );

  if (!job) {

    return (

      <section className="job-not-found">

        <div className="container">

          <h2>Job Not Found</h2>

          <p>The job you're looking for doesn't exist.</p>

          <Link to="/jobs">
            Back to Jobs
          </Link>

        </div>

      </section>

    );

  }

  return (

    <section className="job-details-page">

      <div className="container">

        <Link
          to="/jobs"
          className="back-job-btn"
        >
          <FiArrowLeft />
          Back to Jobs
        </Link>

        <div className="job-details-grid">

          {/* Left */}

          <div className="job-details-content">

            <div className="job-details-card">

              <div className="job-title-area">

                <div className="job-logo">
                  {job.logo}
                </div>

                <div>

                  <h1>{job.title}</h1>

                  <p>{job.company}</p>

                </div>

              </div>

              <div className="job-info-grid">

                <span>
                  <FiMapPin />
                  {job.location}
                </span>

                <span>
                  <FiBriefcase />
                  {job.experience}
                </span>

                <span>
                  <FiClock />
                  {job.jobType}
                </span>

                <span>
                  <FiDollarSign />
                  {job.salary}
                </span>

                <span>
                  <FiCalendar />
                  Posted {job.posted}
                </span>

                <span>
                  <FiCalendar />
                  Apply Anytime
                </span>

              </div>

              <div className="job-actions">

                <button>
                  <FiBookmark />
                  Save Job
                </button>

                <button>
                  <FiShare2 />
                  Share Job
                </button>

              </div>

            </div>

            <div className="job-section-card">

              <h3>Job Description</h3>

              <p>
                We are looking for a passionate professional to join our
                growing team. You will collaborate with cross-functional
                teams, build scalable applications, participate in planning,
                testing, deployment, and continuously improve product quality.
              </p>

            </div>

            <div className="job-section-card">

              <h3>Key Responsibilities</h3>

              <ul>

                <li><FiCheckCircle /> Develop scalable applications.</li>

                <li><FiCheckCircle /> Collaborate with cross-functional teams.</li>

                <li><FiCheckCircle /> Write clean and maintainable code.</li>

                <li><FiCheckCircle /> Participate in code reviews.</li>

                <li><FiCheckCircle /> Troubleshoot production issues.</li>

              </ul>

            </div>

            <div className="job-section-card">

              <h3>Required Skills</h3>

              <div className="job-skills-list">

                {job.skills.map((skill) => (

                  <span key={skill}>{skill}</span>

                ))}

              </div>

            </div>

            <div className="job-section-card">

              <h3>Benefits</h3>

              <ul>

                <li><FiCheckCircle /> Health Insurance</li>

                <li><FiCheckCircle /> Flexible Working Hours</li>

                <li><FiCheckCircle /> Paid Leaves</li>

                <li><FiCheckCircle /> Learning & Development</li>

                <li><FiCheckCircle /> Performance Bonus</li>

              </ul>

            </div>

            <div className="job-section-card">

              <h3>Company Overview</h3>

              <p>
                {job.company} is committed to building innovative digital
                solutions while providing employees with opportunities for
                continuous learning and career growth.
              </p>

            </div>

            <div className="job-section-card">

              <h3>Recruitment Process</h3>

              <ul>

                <li><FiCheckCircle /> Resume Screening</li>

                <li><FiCheckCircle /> Technical Interview</li>

                <li><FiCheckCircle /> HR Discussion</li>

                <li><FiCheckCircle /> Offer & Onboarding</li>

              </ul>

            </div>

          </div>

          {/* Sidebar */}

          <aside className="job-sidebar">

            <div className="apply-card">

              <h3>Ready to Apply?</h3>

              <p>
                Submit your application and our recruitment team will
                review your profile.
              </p>

              <Link
                to={`/jobs/${job.id}/apply`}
                className="apply-now-btn"
              >
                Apply Now
              </Link>

            </div>

          </aside>

        </div>

      </div>

    </section>

  );

}

export default JobDetails;