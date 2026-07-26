import "./LatestJobs.css";
import JobCard from "./JobCard";

const jobs = [
  {
    company: "TechNova Systems",
    logo: "TN",
    logoColor: "#2563EB",
    type: "Full-time",
    title: "Senior React Developer",
    skills: ["React", "TypeScript", "Node.js"],
    location: "Bangalore, KA",
    experience: "5-8 Years",
    salary: "₹22–32 LPA",
    status: "Hiring",
  },
  {
    company: "GlobalEdge Finance",
    logo: "GF",
    logoColor: "#10B981",
    type: "Full-time",
    title: "HR Business Partner",
    skills: ["HRBP", "Payroll", "Compliance"],
    location: "Mumbai, MH",
    experience: "4-7 Years",
    salary: "₹14–20 LPA",
    status: "Hiring",
  },
  {
    company: "CloudPeak Solutions",
    logo: "CP",
    logoColor: "#7C3AED",
    type: "Contract",
    title: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes"],
    location: "Hyderabad, TS",
    experience: "3-6 Years",
    salary: "₹18–28 LPA",
    status: "Hiring",
  },
];

function LatestJobs() {
  return (
    <section className="latest-jobs">

      <div className="container">

        <div className="jobs-header">

          <div>

            <span className="jobs-badge">
              HOT OPENINGS
            </span>

            <h2>Latest Job Opportunities</h2>

          </div>

          <a href="/">View All Jobs →</a>

        </div>

        <div className="jobs-grid">

          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default LatestJobs;