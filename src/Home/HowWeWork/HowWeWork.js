import React from "react";
import "./HowWeWork.css";
import SmallLogo from "../../Logo/SmallLogo";

const HowWeWork = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="news-head section_main_head text-center pb-5 block_head">
            <SmallLogo />
            {/* <small>OUR BLOG </small> */}
            <h3>How do we work?</h3>
          </div>
        </div>
        <div className="container">
          <p>
            Booking and scheduling an appointment with us is a simple process.
            Before you book, you can speak to our experts and understand which
            package is the best for you. Get the full details and choose the
            right package as per your requirements.
          </p>
          <ul className="how-we-work-points">
            <li>
              <span>Find the Right Service:</span> Select the service as per
              your requirement and get an esteemed charge.
            </li>
            <li>
              <span>Book the Service:</span> Book the required cleaning and if
              you have any doubts, you can connect with us for clarification.
              Once the booking is done you can make the payment.
            </li>
            <li>
              <span>Get an expert:</span> Our experts will reach your home and
              perform their service. Once the service is done you can give the
              feedback to them.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
