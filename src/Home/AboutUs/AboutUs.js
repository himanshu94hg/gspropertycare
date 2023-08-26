import React from "react";
import SmallLogo from "../../Logo/SmallLogo";
import AboutImage from "../../assets/img/about-img.webp";

const AboutUs = () => {
  return (
    <>
      <section id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 about-details pb-5">
              <div className="about-head section_main_head">
                <div className="media">
                  <SmallLogo />
                  <div className="media-body about-title">
                    <small>ABOUT US </small>
                    <h3>WELCOME TO GS Property Care </h3>
                  </div>
                </div>
              </div>
              <p className="about-text">
                GS Property Care is a skilled team of experts covering various
                fields, dedicated to addressing your household needs. From
                cleaning and maintenance to repairs and services like plumbing,
                gardening, and more, we enhance homes across Australia. With a
                nationwide presence, we are the preferred choice for many
                Australian households, standing out due to our excellence.
              </p>
              <a className="theme_yellow_button" href="/">
                GET STARTED <i className="fas fa-chevron-right" />
              </a>
            </div>
            <div className="col-lg-6 col-md-12 about-image d-flex align-items-end">
              <img src={AboutImage} alt="about us heading" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
