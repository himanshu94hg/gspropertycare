import React from "react";
import "./PowerCare.css";
import MobileLogo from "../../Logo/MobileLogo";

const PowerCare = () => {
  return (
    <>
      <section id="power-section">
        <div className="container">
          <div className="process-head section_main_head text-center pb-5 block_head">
            <MobileLogo />
            {/* <small>WORK STEPS </small>   */}
            <h3>
              Unleash the Power of Hygiene for Commercial cleaning services with
              GS Property Care. <br />
              <br />
              Schedule Today for a Spotless Property!
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerCare;
