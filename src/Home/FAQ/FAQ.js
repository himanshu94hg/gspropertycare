import React from "react";
import "./FAQ.css";
import SmallLogo from "../../Logo/SmallLogo";

const FAQ = () => {
  return (
    <>
      <section id="" className="">
        <div className="container">
          <div className="news-head section_main_head text-center pb-5 block_head">
            <SmallLogo />
            {/* <small>OUR BLOG </small> */}
            <h3>FREQUENTLY ASKED QUSTIONS</h3>
          </div>
        </div>
        <div className="container">
          <div className="">
            <div className="">
              <div className="faq" id="accordion">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-1"
                        data-aria-expanded="true"
                        data-aria-controls="faqCollapse-1"
                      >
                        <span className="badge">1</span>What tasks are included
                        in the handyman services offered by you?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    className="collapse"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        We cover a wide range of tasks in our handyman services
                        which comprise plumbing repairs, electrical work,
                        carpentry, and general maintenance. We aim to take every
                        project – be it small or big with expertise.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-2">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-2"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-2"
                      >
                        <span className="badge">2</span> How often should I
                        schedule commercial cleaning services for my business?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-2"
                    className="collapse"
                    aria-labelledby="faqHeading-2"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        When it comes to commercial cleaning, the factors that
                        design their reoccurrence are the size and nature of
                        your business. GS Property Care helps you with a
                        tailored package around your cleaning schedule and it
                        can be daily, weekly, or monthly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-3">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-3"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-3"
                      >
                        <span className="badge">3</span>What types of locksmith
                        services do you offer, and are your technicians
                        certified?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-3"
                    className="collapse"
                    aria-labelledby="faqHeading-3"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Under locksmith services, we offer key replacements,
                        lock installations, and emergency lock assistance. Our
                        experts are certified, and insured and ensure quality
                        service and security.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-4">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-4"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-4"
                      >
                        <span className="badge">4</span> What do your gardening
                        maintenance services include, and how often should I
                        schedule it?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-4"
                    className="collapse"
                    aria-labelledby="faqHeading-4"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        We cover lawn care to landscaping in our garden
                        maintenance service. You can connect with us for the
                        service depending on your needs and season, however,
                        regular maintenance will ensure that you have a clean
                        outdoor space to look at.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
