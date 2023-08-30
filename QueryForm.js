import React, {useState} from "react";
import MobileLogo from "../Logo/MobileLogo";

const QueryForm = () => {

  const [orderForm, setOrderForm] = useState({"fname":'', "lname": '', "email": '', "phone": '', "jobdate": '', "message": '', "services": ''});
  const [errs, setErrs] = useState({fname:'', email: '', phone: '', message: '', services: '', jobdate: '' });

  const onChangeOrderForm = (e) => {
    setOrderForm({...orderForm,[e.target.name]:e.target.value});
  }

  console.log(orderForm);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try{

        let res = await fetch("http://43.205.214.16/api/add/order", {
          method: "POST",
          // cache: "no-cache",
          headers:{
              'Accept' : 'application/json',
              "Content-Type": "application/json"
          },
          body: JSON.stringify(orderForm)
        });
        let resJson = await res.json();

        // setOrderForm("");
        if (resJson.status === 200) {
          // setMessage("Appointment submitted successfully");
        } else {
          // setMessage("Something went wrong");
          setErrs({
            fname : resJson.errors.fname, 
            email : resJson.errors.email, 
            phone : resJson.errors.phone, 
            services : resJson.errors.services, 
            message : resJson.errors.message, 
            jobdate : resJson.errors.jobdate
          });

          console.log(errs);
        }

    } catch (err) {

    }
  }

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
              onChange={onChangeOrderForm}
            />
          {errs.fname && <small id="fname" className="form-text text-danger">{errs.fname}</small>}
          </label>
          <label>
            {/*  Name */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your name"
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
              type="search"
              className="search-field"
              placeholder="Enter your phone number"
              defaultValue=""
              name="phone"
              onChange={onChangeOrderForm}
            />
            {errs.phone && <small id="fname" className="form-text text-danger">{errs.phone}</small>}
          </label>
          <label>
            {/* Email */}
            <input
              type="search"
              className="search-field"
              placeholder="Enter your email"
              defaultValue=""
              name="email"
              onChange={onChangeOrderForm}
            />
            {errs.email && <small id="fname" className="form-text text-danger">{errs.email}</small>}
          </label>
        </div>
        <div className="Form-row">
          <label htmlFor="Services">
            <select className="search-field" name="services" id="services" onChange={onChangeOrderForm}>
              <option value="">Select a service</option>
              <option value="Care_removals">Care Removals</option>
              <option value="Care_bond_cleaning">Care Bond Cleaning</option>
              <option value="Care_care_cleaning">Care Care Cleaning</option>
              <option value="Care_tiles_grout_cleaning">Care Tiles Grout Cleaning</option>
              <option value="Care_handyman">Care Handyman</option>
              <option value="Care_plumbers">Care Plumbers</option>
              <option value="Care_gardening">Care Gardening</option>
              <option value="Care_electrician">Care Electrician</option>
              <option value="Care_locksmith">Care Locksmith</option>
            </select>
          {errs.services && <small id="fname" className="form-text text-danger">{errs.services}</small>}
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
            {errs.jobdate && <small id="fname" className="form-text text-danger">{errs.jobdate}</small>}
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
              onChange={onChangeOrderForm}
              />
              {errs.message && <small id="fname" className="form-text text-danger">{errs.message}</small>}
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
