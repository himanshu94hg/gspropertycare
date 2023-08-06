import React, { useState, useEffect } from "react";
import smallLogo from "../../assets/img/GS-logo-small.png";
import removals from "../../assets/img/services/service/removals.png";
import bondcleaning from "../../assets/img/services/service/bondcleaning.png";
import carpet from "../../assets/img/services/service/steam-carpet-cleaning.png";
import tiles from "../../assets/img/services/service/tiles.png";
import Handyman from "../../assets/img/services/service/Handyman.png";
import Plumbers from "../../assets/img/services/service/Plumbers.png";
import gardening from "../../assets/img/services/service/gardening.png";
import electrician from "../../assets/img/services/service/electrician.png";
import locksmith from "../../assets/img/services/service/locksmith.png";

const OurServices = () => {
  const [condition, setCondition] = useState(1);

  useEffect(() => {
    // Define your time intervals (in milliseconds) here
    const interval1 = 2000; // 3 seconds
    const interval2 = 4000; // 5 seconds
    const interval3 = 6000; // 7 seconds

    // Set up the timer to change the condition every interval
    const timer = setInterval(() => {
      setCondition((prevCondition) => {
        // Switch between the three conditions (1, 2, 3)
        if (prevCondition === 1) {
          return 2;
        } else if (prevCondition === 2) {
          return 3;
        } else {
          return 1;
        }
      });
    }, interval3); // Use the interval of the last condition

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const getStyle = () => {
    // Define your styles for each condition here
    if (condition === 1) {
      return {
        transform: "translate3d(0px, 0px, 0px)",
        transition: "all 0.25s ease 0s",
        width: 3391,
      };
    } else if (condition === 2) {
      return {
        transform: "translate3d(-1130px, 0px, 0px)",
        transition: "all 0.25s ease 0s",
        width: 3391,
      };
    } else {
      return {
        transform: "translate3d(-2260px, 0px, 0px)",
        transition: "all 0.25s ease 0s",
        width: 3391,
      };
    }
  };
  return (
    <>
      <section
        id="our-services"
        style={{}}
        className=""
        data-loops="true"
        data-speed={3000}
      >
        <div className="container">
          <div className="services-head section_main_head text-center pb-5 block_head">
            <img src={smallLogo} width={75} alt="Alt tab for Services icon" />
            <small>PROVIDE SERVICES </small>
            <h3>OUR CLEANING SERVICES </h3>
          </div>
          <div className="owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div id="owl-stage" className="owl-stage" style={getStyle()}>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={removals}
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={removals}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                          alt="Alt Tag for Services meta image1"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Removals</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                          alt="Alt Tag for Services meta image1"
                        />
                      </span>
                      <h5>Care Removals</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={bondcleaning}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={bondcleaning}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                          alt="Alt Tag for Services meta image2"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Bond Cleaning</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                          alt="Alt Tag for Services meta image2"
                        />
                      </span>
                      <h5>Care Bond Cleaning</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={carpet}
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={carpet}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                          alt="Alt Tag for Services meta image3"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Carpet Cleaning</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                          alt="Alt Tag for Services meta image3"
                        />
                      </span>
                      <h5>Care Carpet Cleaning</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={tiles}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={tiles}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                          alt="Alt Tag for Services meta image1"
                        />
                      </span>
                      <h5>
                        <a href="/">Cere Tiles Grout Cleaning</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                          alt="Alt Tag for Services meta image1"
                        />
                      </span>
                      <h5>Cere Tiles Grout Cleaning</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={Handyman}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={Handyman}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                          alt="Alt Tag for Services meta image2"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Handyman</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                          alt="Alt Tag for Services meta image2"
                        />
                      </span>
                      <h5>Care Handyman</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={Plumbers}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={Plumbers}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                          alt="Alt Tag for Services meta image3"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Plumbers</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                          alt="Alt Tag for Services meta image3"
                        />
                      </span>
                      <h5>Care Plumbers</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={gardening}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={gardening}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                          alt="Alt Tag for Services meta image1"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Gardening</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                          alt="Alt Tag for Services meta image1"
                        />
                      </span>
                      <h5>Care Gardening</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={electrician}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={electrician}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                          alt="Alt Tag for Services meta image2"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Electrician</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                          alt="Alt Tag for Services meta image2"
                        />
                      </span>
                      <h5>Care Electrician</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "356.667px", marginRight: 20 }}
                >
                  <div className="box services-info ">
                    <img
                      width={370}
                      height={216}
                      src={locksmith}
                      className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet={locksmith}
                      sizes="(max-width: 370px) 100vw, 370px"
                    />
                    <div className="box-content">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                          alt="Alt Tag for Services meta image3"
                        />
                      </span>
                      <h5>
                        <a href="/">Care Locksmith</a>
                      </h5>
                      <div className="services-text">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus
                      </div>
                    </div>
                    <div className="services-box">
                      <span>
                        <img
                          src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                          alt="Alt Tag for Services meta image3"
                        />
                      </span>
                      <h5>Care Locksmith</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fa fa-chevron-left" aria-hidden="true" />
                <span className="services-dots">nav</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="fa fa-chevron-right" aria-hidden="true" />
                <span className="services-dots">nav</span>
              </button>
            </div>
            <div className="owl-dots disabled">
              <button className="owl-dot active">
                <span />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
