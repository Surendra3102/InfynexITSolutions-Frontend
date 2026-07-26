import "./WhyInfynex.css";
import {
  FiZap,
  FiShield,
  FiAward,
  FiCheckCircle,
  FiTrendingUp,
  FiBookOpen,
} from "react-icons/fi";

const features = [
  {
    icon: <FiZap />,
    title: "Fast Hiring Cycles",
    desc: "Average time-to-hire of 12 days — 40% faster than industry benchmarks.",
    color: "#2563EB",
  },
  {
    icon: <FiShield />,
    title: "Verified Talent Pool",
    desc: "3-layer background verification for every candidate we recommend.",
    color: "#06B6D4",
  },
  {
    icon: <FiAward />,
    title: "Expert Recruiters",
    desc: "120+ certified domain specialists with 10+ years average experience.",
    color: "#2563EB",
  },
  {
    icon: <FiCheckCircle />,
    title: "Quality Assurance",
    desc: "Every candidate goes through technical and HR screening.",
    color: "#3B82F6",
  },
  {
    icon: <FiTrendingUp />,
    title: "98% Client Satisfaction",
    desc: "Long-term partnerships built on consistent hiring success.",
    color: "#2563EB",
  },
  {
    icon: <FiBookOpen />,
    title: "Industry Expertise",
    desc: "Recruitment solutions across IT, Healthcare, Finance and Manufacturing.",
    color: "#2563EB",
  },
];

function WhyInfynex() {
  return (
    <section className="why-infynex">

      <div className="container">

        <div className="section-title">

          <span>WHY INFYNEX</span>

          <h2>Why Companies Trust Us</h2>

          <p>
            More than a recruiter — a strategic talent partner committed
            to your long-term success.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (

            <div className="why-card" key={index}>

              <div
                className="why-icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyInfynex;