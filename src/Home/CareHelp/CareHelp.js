import React from "react";
import "./CareHelp.css";
import Diverse from "../../assets/img/helps/diversity.png";
import Response from "../../assets/img/helps/response.png";
import Cost from "../../assets/img/helps/return-on-investment.png";
import Peace from "../../assets/img/helps/peace-of-mind.png";
import MobileLogo from "../../Logo/MobileLogo";

const CareHelp = () => {
  return (
    <>
      <section id="how-we-work">
        <div className="container">
          <div className="process-head section_main_head text-center pb-5 block_head">
            <MobileLogo />
            {/* <small>WORK STEPS </small>   */}
            <h3>How GS Property Care Helps</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 process-box text-center">
              <img src={Diverse} alt="Alt Tab for record image1" />
              <span>1 </span>
              <p>Diverse Expertise</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 process-box text-center">
              <img src={Response} alt="Alt Tab for record image2" />
              <span>2 </span>
              <p>Emergency Response</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 process-box text-center">
              <img src={Cost} alt="Alt Tab for record image3" />
              <span>3 </span>
              <p>Cost Efficient</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 process-box text-center">
              <img src={Peace} alt="Alt Tab for record image4" />
              <span>4 </span>
              <p>Peace of Mind</p>
            </div>
          </div>
          <div className="help-list-container">
            <ul>
              <li>
                <b>Diverse Expertise:</b> Our professionals have experts in
                landscaping plumbing and electrical, which ensures all aspects
                of your property are taken care of.
              </li>
              <li>
                <b>Emergency Response:</b> We have 24/7 emergency services
                implying you’ll never face any unexpected property issues.
              </li>
              <li>
                <b>Cost Efficient:</b> We offer affordable prices and our
                packages are tailored to fit your budget without the quality
                being compromised.
              </li>
              <li>
                <b>Peace of Mind:</b> You enjoy the cleaning of your property
                with ease of mind as the stress of maintenance and repairs is on
                us now.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareHelp;
