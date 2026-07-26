import { useState } from "react";
import "./FAQ.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What industries do you recruit for?",
    answer:
      "We recruit for IT, Non-IT, Healthcare, Finance, Manufacturing, Retail, Logistics, Education, and many other industries.",
  },
  {
    question: "Do you provide permanent and contract staffing?",
    answer:
      "Yes. We offer Permanent Recruitment, Contract Staffing, Executive Hiring, HR Outsourcing, and Recruitment Process Outsourcing (RPO).",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "The hiring timeline depends on the position and business requirements. Our streamlined recruitment process helps reduce hiring time while maintaining quality.",
  },
  {
    question: "Can startups and small businesses use your services?",
    answer:
      "Absolutely. We work with startups, SMEs, and large enterprises by providing flexible hiring solutions tailored to their business needs.",
  },
  {
    question: "How do I get started with Infynex?",
    answer:
      "Simply contact our recruitment team through the Contact page. We'll understand your hiring requirements and recommend the best solution.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <div className="faq-header">

          <span className="faq-badge">
            FAQ
          </span>

          <h2 className="faq-title">
            Frequently Asked <span className="faq-highlight">Questions</span>
          </h2>

          <p className="faq-description">
            Find answers to the most common questions about our recruitment
            and staffing services.
          </p>

        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                {activeIndex === index ? (
                  <FiMinus />
                ) : (
                  <FiPlus />
                )}

              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;