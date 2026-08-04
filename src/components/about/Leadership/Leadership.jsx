import "./Leadership.css";

import chairmanImg from "../../../assets/chairman.png";
import directorImg from "../../../assets/director.png";
import ceoImg from "../../../assets/ceo.png";

const leaders = [
  {
    image: chairmanImg,
    role: "Chairman",
    name: "Chairman Name",
    description:
      "Providing strategic leadership and long-term vision while driving corporate excellence and sustainable business growth.",
    tags: [
      "Vision",
      "Leadership",
      "Governance",
    ],
  },
  {
    image: directorImg,
    role: "Director - Talent Acquisition",
    name: "Director Name",
    description:
      "Leading talent acquisition strategies by connecting exceptional professionals with organizations across diverse industries.",
    tags: [
      "Talent",
      "Recruitment",
      "Workforce",
    ],
  },
  {
    image: ceoImg,
    role: "CEO & Founder",
    name: "CEO Name",
    description:
      "Driving innovation, client success, and business transformation through technology-enabled workforce solutions.",
    tags: [
      "Innovation",
      "Growth",
      "Strategy",
    ],
  },
];

function Leadership() {
  return (
    <section className="leadership">

      <div className="container">

        <div className="leadership-header">

          <span className="section-badge">

            OUR LEADERSHIP

          </span>

          <h2>

            Meet the Visionaries Behind Infynex

          </h2>

          <p>

            Our leadership team combines industry expertise,
            strategic thinking, and a passion for connecting
            businesses with exceptional talent.

          </p>

        </div>

        <div className="leadership-grid">
                      {leaders.map((leader, index) => (

            <article
              className="leader-card"
              key={index}
            >

              {/* Image */}

              <div className="leader-image-box">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-image"
                />

                <div className="leader-overlay">

                  <span>

                    {leader.role}

                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="leader-content">

                <span className="leader-badge">

                  {leader.role}

                </span>

                

                <p>

                  {leader.description}

                </p>

                <div className="leader-tags">

                  {leader.tags.map((tag, tagIndex) => (

                    <span
                      key={tagIndex}
                    >

                      {tag}

                    </span>

                  ))}

                </div>

              </div>

              <div className="leader-card-glow"></div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Leadership;