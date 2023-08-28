import React from "react";
import MobileLogo from "../Logo/MobileLogo";

const QueryForm = () => {
  return (
    <>
      <form
        role="search"
        method="get"
        className="search-form serach-page"
        action=""
      >
        <div className="Form-header">
          <div className="logo-div">
            <MobileLogo />
          </div>
          <div>
            <h3>Tell us more!</h3>
            <p>
              Kindly complete this form and our representative will be in touch
              with you shortly!
            </p>
          </div>
        </div>
        <div className="Form-row">
          <label>
            {/*  Name */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your name"
              defaultValue=""
              name="fname"
            />
          </label>
          <label>
            {/*  Name */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your name"
              defaultValue=""
              name="lname"
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
              name="phone"
            />
          </label>
          <label>
            {/* Email */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your email"
              defaultValue=""
              name="email"
            />
          </label>
        </div>
        <div className="Form-row">
          <label htmlFor="Services">
            <select className="search-field" name="services" id="services">
              <option value="Select a service">Select a service</option>
              <option value="Care Removals">Care Removals</option>
              <option value="Care Bond Cleaning">Care Bond Cleaning</option>
              <option value="Care Care Cleaning">Care Care Cleaning</option>
              <option value="Care Tiles Grout Cleaning">
                Care Tiles Grout Cleaning
              </option>
              <option value="Care Handyman">Care Handyman</option>
              <option value="Care Plumbers">Care Plumbers</option>
              <option value="Care Gardening">Care Gardening</option>
              <option value="Care Electrician">Care Electrician</option>
              <option value="Care Locksmith">Care Locksmith</option>
            </select>
          </label>
          <label>
            {/* Date */}
            <input
              type="date"
              className="search-field date"
              defaultValue=""
              name="jobdate"
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
              name="message"
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
