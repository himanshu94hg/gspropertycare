import React from "react";
import SmallLogo from "../../Logo/SmallLogo";
import AboutImage from "../../assets/img/about-img.webp";
import { Link } from "react-router-dom";

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
                We are known as your trusted commercial and house cleaning
                experts in Melbourne. We help you maintain a pristine
                environment by specializing in cleaning solutions that help
                transform your space and elevate standards with exceptional
                cleaning services.
              </p>
              <Link className="theme_yellow_button" to="/Services">
                GET STARTED <i className="fas fa-chevron-right" />
              </Link>
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
