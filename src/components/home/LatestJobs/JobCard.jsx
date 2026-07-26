import {
  FiMapPin,
  FiBriefcase,
  FiTrendingUp,
} from "react-icons/fi";

function JobCard({ job }) {
  return (
    <div className="job-card">

      <div className="job-top">

        <div className="company">

          <div
            className="company-logo"
            style={{ background: job.logoColor }}
          >
            {job.logo}
          </div>

          <div>

            <h4>{job.company}</h4>

            <span>{job.type}</span>

          </div>

        </div>

        <span className="status">
          {job.status}
        </span>

      </div>

      <h3>{job.title}</h3>

      <div className="skills">

        {job.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}

      </div>

      <div className="job-info">

        <span>
          <FiMapPin />
          {job.location}
        </span>

        <span>
          <FiBriefcase />
          {job.experience}
        </span>

      </div>

      <div className="salary">

        <FiTrendingUp />

        {job.salary}

      </div>

      <button>

        Apply Now

      </button>

    </div>
  );
}

export default JobCard;