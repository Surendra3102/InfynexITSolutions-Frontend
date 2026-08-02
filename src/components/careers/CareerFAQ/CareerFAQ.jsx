import "./CareerFAQ.css";

import { useState } from "react";

import {
  FiHelpCircle,
  FiChevronDown,
  FiMail,
  FiClock,
} from "react-icons/fi";

/*=========================================
            FAQ DATA
=========================================*/

const faqs = [

  {
    id:1,

    question:"Do you hire freshers?",

    answer:
      "Yes. We welcome applications from fresh graduates who are passionate about learning and building their careers. Entry-level opportunities may vary depending on current business requirements."

  },

  {
    id:2,

    question:"Can experienced professionals apply?",

    answer:
      "Absolutely. We hire professionals with diverse experience levels across technology, recruitment, business development, operations, and other domains."

  },

  {
    id:3,

    question:"How do I apply for career opportunities?",

    answer:
      "You can reach out to our HR team through the contact page or share your profile when opportunities become available. We regularly review applications for suitable roles."

  },

  {
    id:4,

    question:"How long does the recruitment process take?",

    answer:
      "The hiring timeline depends on the role and business requirements. Candidates who move forward in the process are contacted promptly with updates."

  },

  {
    id:5,

    question:"Will I receive updates regarding my application?",

    answer:
      "Yes. Candidates progressing through the recruitment process receive communication from our recruitment team at every important stage."

  },

  {
    id:6,

    question:"Can I apply for multiple career paths?",

    answer:
      "Yes. If your skills match multiple domains, you may express interest in more than one career path during the recruitment process."

  },

];
function CareerFAQ() {

  const [active, setActive] = useState(0);

  const toggleFAQ = (id) => {

    setActive(active === id ? null : id);

  };

  return (

    <section className="career-faq">

      <div className="container">

        <div className="career-faq-grid">

          {/*==================================
                  LEFT SUPPORT PANEL
          ==================================*/}

          <div className="career-faq-info">

            <span className="section-badge">

              NEED HELP?

            </span>

            <h2>

              Frequently Asked
              <span> Questions</span>

            </h2>

            <p>

              Everything you need to know about
              starting your career journey with
              Infynex Global. If you don't find
              the answer you're looking for,
              our HR team is always happy to help.

            </p>

            <div className="faq-support-card">

              <div className="support-icon">

                <FiMail />

              </div>

              <div>

                <h4>

                  HR Support

                </h4>

                <span>

                  careers@infynexglobal.com

                </span>

              </div>

            </div>

            <div className="faq-support-card">

              <div className="support-icon">

                <FiClock />

              </div>

              <div>

                <h4>

                  Response Time

                </h4>

                <span>

                  Within 24 Business Hours

                </span>

              </div>

            </div>

          </div>

          {/*==================================
                    FAQ LIST
          ==================================*/}

          <div className="career-faq-list">

            {faqs.map((item) => (

              <div

                key={item.id}

                className={`faq-item ${
                  active === item.id ? "active" : ""
                }`}

              >

                <button

                  className="faq-question"

                  onClick={() => toggleFAQ(item.id)}

                >

                  <div className="faq-title">

                    <FiHelpCircle />

                    <span>

                      {item.question}

                    </span>

                  </div>

                  <FiChevronDown className="faq-arrow" />

                </button>

                <div className="faq-answer">

                  <p>

                    {item.answer}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default CareerFAQ;