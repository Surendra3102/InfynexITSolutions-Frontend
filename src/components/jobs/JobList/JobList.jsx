import "./JobList.css";
import { useState } from "react";
import JobCard from "../JobCard/JobCard";
import jobsData from "../../../data/jobsData";

function JobList() {

    const [sortBy, setSortBy] = useState("newest");
    const [visibleJobs, setVisibleJobs] = useState(4);

    return (

        <section className="job-list-wrapper">

            {/* Header */}

            <div className="job-list-header">

                <div className="job-list-info">

                    <h2>Available Jobs</h2>

                    <p>{jobsData.length} Jobs Found</p>

                </div>

                <div className="job-sort">

                    <label>Sort By</label>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="salary">Highest Salary</option>
                        <option value="experience">Experience</option>
                    </select>

                </div>

            </div>

            {/* Job Cards */}

            <div className="job-list">

                {jobsData.length > 0 ? (

                    jobsData
                        .slice(0, visibleJobs)
                        .map((job) => (

                            <JobCard
                                key={job.id}
                                job={job}
                            />

                        ))

                ) : (

                    <div className="job-empty">

                        <h3>No Jobs Found</h3>

                        <p>
                            Try changing your search or filter criteria.
                        </p>

                    </div>

                )}

            </div>

            {/* Load More */}

            {visibleJobs < jobsData.length && (

                <div className="load-more">

                    <button
                        onClick={() => setVisibleJobs(visibleJobs + 4)}
                    >
                        View More Jobs
                    </button>

                </div>

            )}

        </section>

    );

}

export default JobList;