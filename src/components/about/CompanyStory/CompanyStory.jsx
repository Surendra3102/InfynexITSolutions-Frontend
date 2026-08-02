import "./CompanyStory.css";

import {
  FaCheckCircle,
} from "react-icons/fa";

import storyImage from "../../../assets/company-story.png";

const features = [
  "IT Recruitment",
  "Software Development",
  "Cloud Solutions",
  "AI & Automation",
];

function CompanyStory() {

  return (

    <section className="company-story">

      <div className="company-story-container">

        {/* Left */}

        <div className="company-story-content">

          <span className="company-story-badge">

            WHO WE ARE

          </span>

          <h2 className="company-story-title">

            Empowering Businesses Through
            <span> Talent & Technology</span>

          </h2>

          <p className="company-story-description">

            At <strong>Infynex Global IT Solutions Pvt. Ltd.</strong>,
            we believe every successful business needs
            two key strengths:
            exceptional people and innovative technology.

          </p>

          <p className="company-story-description">

            We specialize in providing end-to-end IT
            recruitment and software development services
            to startups, SMEs and large enterprises.
            Our team combines industry expertise with
            modern technology to deliver customized
            solutions that help organizations scale faster.

          </p>

          <div className="company-story-list">

            {features.map((item, index) => (

              <div
                key={index}
                className="company-story-item"
              >

                <FaCheckCircle />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="company-story-image">

          <img
            src={storyImage}
            alt="Company Story"
          />

        </div>

      </div>

    </section>

  );

}

export default CompanyStory;