import React from "react";

const QueryForm = () => {
  return (
    <>
      <form
        role="search"
        method="get"
        className="search-form serach-page"
        action="https://www.vwthemesdemo.com/vw-cleaning-company-pro/"
      >
        <h3>Tell us more!</h3>
        <p>
          Kindly complete this form, and you'll receive an email containing a
          service estimate. Our representative will be in touch with you
          shortly!
        </p>
        <div className="Form-row" style={{ gap: "70px" }}>
          <label>
            {/* First Name */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your first name"
              defaultValue=""
              name="s"
            />
          </label>

          <label>
            {/* Last Name */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your last name"
              defaultValue=""
              name="s"
            />
          </label>
        </div>
        <div className="Form-row">
          <label>
            {/* Email */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your email"
              defaultValue=""
              name="s"
            />
          </label>
        </div>

        <div className="Form-row">
          <label>
            {/* Phone Number */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your phone number"
              defaultValue=""
              name="s"
            />
          </label>
        </div>
        <div className="Form-row">
          <label>
            {/* Message */}
            <textarea
              type="search"
              className="search-field"
              placeholder="Tell us more about your required service!"
              defaultValue=""
              name="s"
            />
          </label>
        </div>
        <button type="submit" className="theme_blue_button search-submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default QueryForm;
