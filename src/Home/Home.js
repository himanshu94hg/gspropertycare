import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Features from "./features";
import heroBG from "../assets/img/hero-bg3.webp";
import heroBGTwo from "../assets/img/hero-bg3.jpg";
import heroBGThree from "../assets/img/hero-bg-5.png";
import AboutUs from "./AboutUs/AboutUs";
import AutoplayCarousel from "./OurServices/AutoplayCarousel";
import News from "../News/News";
import CallingFeature from "./CallingFeature/CallingFeature";
import Header from "../Header/header";
import QueryForm from "../Header/QueryForm";

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleForm = () => {
    setFormOpen(!formOpen);
    console.log(formOpen);
  };

  // const handleFormClose = () => {
  //   setFormOpen(false);
  // };

  return (
    <>
      <Header handleForm={handleForm} />
      <section id="slider">
        <div
          id="carouselindicators"
          className="carousel slide  carousel-fade "
          data-ride="carousel"
          data-interval="10000"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item">
              <img src={heroBG} alt="slider" />
              <div className="carousel-caption d-md-block mt-5">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="inner_carousel">
                      <div className="slider-box">
                        <p className="smalltext animate__animated animate__fadeInRight animate__delay-1s">
                          HIGH QUALITY SERVICES
                        </p>
                        <h2 className="animate__animated animate__fadeInLeft animate__delay-1s">
                          SERVICES &amp; AFFORDABLE PRICE
                        </h2>
                        <div className="animate__animated animate__fadeInRight animate__delay-1s">
                          <p>
                            Flawless Homes: Simplifying Cleaning & Maintenance!
                          </p>
                        </div>
                        <button
                          className="read-more animate__animated animate__fadeInLeft animate__delay-1s theme_yellow_button mr-4"
                          onClick={() => scrollToSection("about-us")}
                        >
                          <i className="fas fa-chevron-right"></i>
                          READ MORE
                        </button>
                        <Link
                          className="read-more animate__animated animate__fadeInLeft animate__delay-1s theme_blue_button"
                          to="/form"
                        >
                          <i className="far fa-calendar-alt"></i>
                          BOOK AN APPOINTMENT
                          <span className="screen-reader-text">
                            video button
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide_nav">
                    <a
                      className="carousel-prev-button hvr-shrink"
                      href="#carouselindicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-next-button hvr-shrink"
                      href="#carouselindicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={heroBGTwo} alt="slider" />
              <div className="carousel-caption d-md-block mt-5">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="inner_carousel">
                      <div className="slider-box">
                        <p className="smalltext animate__animated animate__fadeInRight animate__delay-1s">
                          HIGH QUALITY SERVICES
                        </p>
                        <h2 className="animate__animated animate__fadeInLeft animate__delay-1s">
                          Clean & Care Experts
                        </h2>
                        <div className="animate__animated animate__fadeInRight animate__delay-1s">
                          <p>
                            Your Ultimate Cleaning & Maintenance Solution:
                            Sparkling Homes!
                          </p>
                        </div>
                        <button
                          className="read-more animate__animated animate__fadeInLeft animate__delay-1s theme_yellow_button mr-4"
                          onClick={() => scrollToSection("about-us")}
                        >
                          <i className="fas fa-chevron-right"></i>
                          READ MORE
                        </button>
                        <Link
                          className="read-more animate__animated animate__fadeInLeft animate__delay-1s theme_blue_button"
                          to="/form"
                        >
                          <i className="far fa-calendar-alt"></i>
                          BOOK AN APPOINTMENT
                          <span className="screen-reader-text">
                            video button
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide_nav">
                    <a
                      className="carousel-prev-button hvr-shrink"
                      href="#carouselindicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-next-button hvr-shrink"
                      href="#carouselindicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={heroBGThree} alt="slider" />
              <div className="carousel-caption d-md-block mt-5">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="inner_carousel">
                      <div className="slider-box">
                        <p className="smalltext animate__animated animate__fadeInRight animate__delay-1s">
                          HIGH QUALITY SERVICES
                        </p>
                        <h2 className="animate__animated animate__fadeInLeft animate__delay-1s">
                          WE ARE ALWAYS READY TO SERVICES
                        </h2>
                        <div className="animate__animated animate__fadeInRight animate__delay-1s">
                          <p>
                            Sparkling Homes: Your One-Stop Solution for Cleaning
                            & Maintenance Services!
                          </p>
                        </div>
                        <button
                          className="read-more animate__animated animate__fadeInLeft animate__delay-1s theme_yellow_button mr-4"
                          onClick={() => scrollToSection("about-us")}
                        >
                          <i className="fas fa-chevron-right"></i>
                          READ MORE
                        </button>
                        <Link
                          className="read-more animate__animated animate__fadeInLeft animate__delay-1s theme_blue_button"
                          to="/form"
                        >
                          <i className="far fa-calendar-alt"></i>
                          BOOK AN APPOINTMENT
                          <span className="screen-reader-text">
                            video button
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide_nav">
                    <a
                      className="carousel-prev-button hvr-shrink"
                      href="#carouselindicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-next-button hvr-shrink"
                      href="#carouselindicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container custom_cls">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselindicators"
                data-slide-to="0"
                className=""
              ></li>
              <li
                data-target="#carouselindicators"
                data-slide-to="1"
                className=""
              ></li>
              <li
                data-target="#carouselindicators"
                data-slide-to="2"
                className="active"
              ></li>
            </ol>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>
      <Features />
      <AutoplayCarousel />
      <AboutUs />
      <CallingFeature />
      <News />
      <div
        className={`container form-container-main-close ${
          formOpen ? "form-container-main-open" : ""
        }`}
      >
        <button onClick={handleForm} class="btn-close">
          <span class="close">&times;</span>
        </button>
        <QueryForm />
      </div>
    </>
  );
};

export default Home;
