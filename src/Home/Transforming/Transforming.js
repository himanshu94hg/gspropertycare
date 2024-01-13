import React from "react";
import SmallLogo from "../../Logo/SmallLogo";
import Project from "../../assets/img/project/why-choose.webp";
import "./Transforming.css";

const Transforming = () => {
  return (
    <>
      <section id="transforming" className="">
        <div className="container">
          <div className="news-head section_main_head text-center pb-5 block_head">
            <SmallLogo />
            {/* <small>OUR BLOG </small> */}
            <h3>Transforming Your Property with GS Property Care </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 d-flex flex-column"
              style={{ justifyContent: "space-evenly" }}
            >
              <p>
                Maintaining and enhancing your property is a challenge and often
                requires care that one needs to work hard on. From repairing to
                plumbing and property management to landscaping – the demand is
                rising and is quite overwhelming. This is where GS Property Care
                steps in with comprehensive solutions to make property ownership
                a breeze.
              </p>
              <p>
                GS Property Care is your one-stop solution as it addresses all
                your property needs. Our professionals take pride when
                transforming your property - residential and commercial – into a
                well-maintained, beautiful, and functional space. Property
                maintenance has its challenges and dealing with them can be
                daunting. It may involve reliable contractors, tackling
                emergencies, and even adhering to tight budgets.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={Project} alt="" className="src" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transforming;
