import React, { useState } from "react";
import MobileLogo from "../Logo/MobileLogo";

const QueryForm = (props) => {
  const [orderForm, setOrderForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    jobdate: "",
    message: "",
    services: "",
  });
  const [errs, setErrs] = useState({
    fname: "",
    email: "",
    phone: "",
    message: "",
    services: "",
    jobdate: "",
  });

  const onChangeOrderForm = (e) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://43.205.214.16/api/add/order", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderForm),
      });
      let resJson = await res.json();

      if (resJson.status === 200) {
        // setMessage("Appointment submitted successfully");
      } else {
        // setMessage("Something went wrong");
        setErrs({
          fname: resJson.errors.fname,
          email: resJson.errors.email,
          phone: resJson.errors.phone,
          services: resJson.errors.services,
          message: resJson.errors.message,
          jobdate: resJson.errors.jobdate,
        });
      }
    } catch (err) {}
  };

  return (
    <>
      <form
        role="search"
        method="get"
        className="search-form serach-page"
        action=""
        onSubmit={handleFormSubmit}
      >
        <div className="Form-header">
          <div className="logo-div">
            <MobileLogo />
          </div>
          <div className="heading-div">
            <h3>Tell us more!</h3>
            <p>
              Kindly complete this form and our representative will be in touch
              with you shortly!
            </p>
          </div>
          <button onClick={props.handleForm} class="btn-close">
            <span class="close">&times;</span>
          </button>
        </div>
        <div className="Form-row">
          <label>
            {/*  Name */}
            <input
              type="text"
              className="search-field"
              placeholder="Enter your first name"
              defaultValue=""
              name="fname"
              onChange={onChangeOrderForm}
            />
            {errs.fname && (
              <small id="fname" className="form-text text-danger">
                {errs.fname}
              </small>
            )}
          </label>
          <label>
            {/*  Name */}
            <input
              type="text"
              className="search-field"
              placeholder="Enter your last name"
              defaultValue=""
              name="lname"
              onChange={onChangeOrderForm}
            />
          </label>
        </div>

        <div className="Form-row">
          <label>
            {/* Phone Number */}
            <input
              type="text"
              className="search-field"
              placeholder="Enter your phone number"
              defaultValue=""
              name="phone"
              onChange={onChangeOrderForm}
            />
            {errs.phone && (
              <small id="fname" className="form-text text-danger">
                {errs.phone}
              </small>
            )}
          </label>
          <label>
            {/* Email */}
            <input
              type="text"
              className="search-field"
              placeholder="Enter your email"
              defaultValue=""
              name="email"
              onChange={onChangeOrderForm}
            />
            {errs.email && (
              <small id="fname" className="form-text text-danger">
                {errs.email}
              </small>
            )}
          </label>
        </div>
        <div className="Form-row">
          <label htmlFor="Services">
            <select
              className="search-field"
              name="services"
              id="services"
              onChange={onChangeOrderForm}
            >
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
            {errs.services && (
              <small id="fname" className="form-text text-danger">
                {errs.services}
              </small>
            )}
          </label>
          <label>
            {/* Date */}
            <input
              type="date"
              className="search-field date"
              defaultValue=""
              name="jobdate"
              onChange={onChangeOrderForm}
            />
            {errs.jobdate && (
              <small id="fname" className="form-text text-danger">
                {errs.jobdate}
              </small>
            )}
          </label>
        </div>

        <div className="Form-row">
          <label>
            {/* Message */}
            <textarea
              type="text"
              className="search-field"
              placeholder="Tell us more about your required service!"
              defaultValue=""
              name="message"
              onChange={onChangeOrderForm}
            />
            {errs.message && (
              <small id="fname" className="form-text text-danger">
                {errs.message}
              </small>
            )}
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
