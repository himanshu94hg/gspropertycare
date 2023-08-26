import React from "react";
import handymen from "../../assets/img/callnow-right-image.webp";
import FeatureCarousel from "./FeatureCarousel";

const CallingFeature = () => {
  return (
    <>
      <section id="call-now-records">
        <section className="callnow">
          <div className="container">
            <div className="callnow-content d-flex">
              <div className="call-left d-flex flex-column">
                <p>Emergency Service One Call Us</p>
                <h2>08 8444 0442 </h2>
                <a href="/" className="theme_yellow_button width-content-fit">
                  <i class="fa-solid fa-phone"></i>
                  Call now
                </a>
              </div>

              <div className="callnow-right">
                <img src={handymen} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="our_records">
          <div className="container">
            <div className="our-records-details">
              <FeatureCarousel />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default CallingFeature;
