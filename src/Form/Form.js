import React from "react";
import QueryForm from "../Header/QueryForm";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="form-container">
          {/* <h3>Tell us more!</h3>
          <p>
            Kindly complete this form, and you'll receive an email containing a
            service estimate. Our representative will be in touch with you
            shortly!
          </p> */}
          <QueryForm />
        </div>
      </div>
    </>
  );
};

export default Form;
