import React from "react";
import featureOne from "../assets/img/2.webp";
import featureTwo from "../assets/img/3.webp";
import featureThree from "../assets/img/8.webp";
import featureFour from "../assets/img/1.webp";
import featureFive from "../assets/img/7.jpg";
// import featureSix from "../assets/img/7.jpg";

const Features = () => {
  return (
    <>
      <section id="our-features">
        <div className="container">
          <div className="feature-details ">
            <div className="row">
              <div className="col-lg-4 col-md-6 feature_box1">
                <img src={featureOne} alt="Alt Tag for feature icon" />
                <h3>
                  <a href="/">HIGHLY-TRAINED PAINTERS </a>
                </h3>
                <p>
                  Skilled craftsmen master detailed brushwork and artistic
                  finesse.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 feature_box1">
                <img src={featureTwo} alt="Alt Tag for feature icon" />
                <h3>
                  <a href="/">PROFESSIONAL HANDYMAN</a>
                </h3>
                <p>
                  Efficiently offering diverse home maintenance and repair
                  expertise.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 feature_box2">
                <div className="media mb-4 custom_block">
                  <span className="d-flex align-self-center mr-3 mt-2">
                    <img src={featureThree} alt="Alt Tag for feature icon" />
                  </span>
                  <div className="media-body">
                    <h5>
                      <a href="/">BONDED &amp; INSURED </a>
                    </h5>
                    <p>Thoroughly tidy to meet lease-end requirements.</p>
                  </div>
                </div>
                <div className="media mb-4 custom_block">
                  <span className="d-flex align-self-center mr-3 mt-2">
                    <img src={featureFour} alt="Alt Tag for feature icon" />
                  </span>
                  <div className="media-body">
                    <h5>
                      <a href="/">QUALITY CLEANS </a>
                    </h5>
                    <p>
                      Precise, faultless cleaning with exceptional attention.
                    </p>
                  </div>
                </div>
                <div className="media mb-4 custom_block">
                  <span className="d-flex align-self-center mr-3 mt-2">
                    <img src={featureFive} alt="Alt Tag for feature icon" />
                  </span>
                  <div className="media-body">
                    <h5>
                      <a href="/">HAPPY CUSTOMERS </a>
                    </h5>
                    <p>Clients thrilled, joyfully content with services.</p>
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

export default Features;
