import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const FeatureCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="features_container container">
      <div className="features_container_outer"></div>
      <Slider {...settings}>
        <div>
          <div className="our-records-content" style={{}}>
            <div className="our-record-box">
              <div className="media mb-3">
                <div>
                  <i class="fa-regular fa-face-smile"></i>
                </div>
                <p>Happy Customers </p>
              </div>
              <div>
                <span className="count">300</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="our-records-content" style={{}}>
            <div className="our-record-box">
              <div className="media mb-3">
                <div>
                  <i class="fa-solid fa-house"></i>
                </div>
                <p>Projects Completed </p>
              </div>
              <div>
                <span className="count">1230</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="our-records-content" style={{}}>
            <div className="our-record-box">
              <div className="media mb-3">
                <div>
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <p>Years Experience </p>
              </div>
              <div>
                <span className="count">25</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="our-records-content" style={{}}>
            <div className="our-record-box">
              <div className="media mb-3">
                <div>
                  <i class="fa-regular fa-face-smile"></i>
                </div>
                <p>Happy Customers </p>
              </div>
              <div>
                <span className="count">300</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="our-records-content" style={{}}>
            <div className="our-record-box">
              <div className="media mb-3">
                <div>
                  <i class="fa-solid fa-house"></i>
                </div>
                <p>Projects Completed </p>
              </div>
              <div>
                <span className="count">1230</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="our-records-content" style={{}}>
            <div className="our-record-box">
              <div className="media mb-3">
                <div>
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <p>Years Experience </p>
              </div>
              <div>
                <span className="count">25</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeatureCarousel;
