import React, { useState } from "react";
import MobileLogo from "../Logo/MobileLogo";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

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
      let res = await fetch("https://arshadk.online/api/add/order", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderForm),
      });
      let resJson = await res.json();

      if (resJson.status === 200) {
        Swal.fire("Good job!", "Your Appointment is booked!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
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
          <button onClick={props.handleForm} className="btn-close">
            <span className="close">&times;</span>
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
              <option value="">Select a service</option>
              <option value="Care_removals">Care Removals</option>
              <option value="Care_bond_cleaning">Care Bond Cleaning</option>
              <option value="Care_care_cleaning">Care Care Cleaning</option>
              <option value="Care_tiles_grout_cleaning">
                Care Tiles Grout Cleaning
              </option>
              <option value="Care_handyman">Care Handyman</option>
              <option value="Care_plumbers">Care Plumbers</option>
              <option value="Care_gardening">Care Gardening</option>
              <option value="Care_electrician">Care Electrician</option>
              <option value="Care_locksmith">Care Locksmith</option>
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
