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
          <div className="feature-details " style={{}}>
            <div className="row">
              <div className="col-lg-4 col-md-6 feature_box1">
                <img src={featureOne} alt="Alt Tag for feature icon" />
                <h3>
                  <a href="/">HIGHLY-TRAINED PAINTERS </a>
                </h3>
                <p>
                  Te obtinuit ut adepto satis somno. Aliisque institoribus iter
                </p>
              </div>
              <div className="col-lg-4 col-md-6 feature_box1">
                <img src={featureTwo} alt="Alt Tag for feature icon" />
                <h3>
                  <a href="/">PROFESSIONAL HANDYMAN</a>
                </h3>
                <p>
                  Te obtinuit ut adepto satis somno. Aliisque institoribus iter
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
                    <p>Te obtinuit ut adepto satis somno. Aliisque </p>
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
                    <p>Te obtinuit ut adepto satis somno. Aliisque </p>
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
                    <p>Te obtinuit ut adepto satis somno. Aliisque </p>
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
