import React from "react";
import smallLogo from "../../assets/img/GS-logo-small.png";

const AboutUs = () => {
  return (
    <>
      <section id="about-us" style={{}} className=" pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 about-details pb-5">
              <div className="about-head section_main_head">
                <div className="media">
                  <img
                    className="d-flex mr-3"
                    src={smallLogo}
                    width={75}
                    alt="Alt Tag for image about us icon"
                  />
                  <div className="media-body about-title">
                    <small>ABOUT US </small>
                    <h3>WELCOME TO GS Property Care </h3>
                  </div>
                </div>
              </div>
              <p className="about-text">
                Te obtinuit ut adepto satis somno. Aliisque institoribus iter
                deliciae vivet vita. Nam exempli gratia, quotiens ego vadam ad
                diversorum peregrinorum in mane ut effingo ex contractus, hi
                viri qui sedebat ibi Te obtinuit ut adepto satis somno. Aliisque
                institoribus iter deliciae vivet vita. Nam exempli gratia,
                quotiens ego vadam ad diversorum peregrinorum in mane ut effingo
                ex contractus, hi viri qui sedebat ibi Te obtinuit ut adepto
                satis somno.
              </p>
              <a className="theme_yellow_button" href="#">
                GET STARTED <i className="fas fa-chevron-right" />
              </a>
            </div>
            <div className="col-lg-6 col-md-12 about-image d-flex align-items-end">
              <img
                src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/about/about-img.png"
                alt="Alt Tag for image about us heading"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
