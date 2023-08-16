import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import removals from "../../assets/img/services/service/removals.png";
import bondcleaning from "../../assets/img/services/service/bondcleaning.png";
import carpet from "../../assets/img/services/service/steam-carpet-cleaning.png";
import tiles from "../../assets/img/services/service/tiles.png";
import Handyman from "../../assets/img/services/service/Handyman.png";
import Plumbers from "../../assets/img/services/service/Plumbers.png";
import gardening from "../../assets/img/services/service/gardening.png";
import electrician from "../../assets/img/services/service/electrician.png";
import locksmith from "../../assets/img/services/service/locksmith.png";
import "slick-carousel/slick/slick-theme.css";
import SmallLogo from "../../Logo/SmallLogo";

const AutoplayCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: window.innerWidth > 991 ? 4000 : 2000,
    slidesToShow: window.innerWidth > 991 ? 3 : 1,
    slidesToScroll: window.innerWidth > 991 ? 2 : 1,
    arrows: false,
  };

  return (
    <section id="our-services">
      <div className="container">
        <div className="services-head section_main_head text-center pb-5 block_head">
          <SmallLogo />
          <small>PROVIDE SERVICES </small>
          <h3>OUR CLEANING SERVICES </h3>
        </div>
        <Slider {...settings}>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={removals}
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={removals}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>
                <a href="/">Care Removals</a>
              </h5>
              <div className="services-text">
                Seamless Transitions, Stress-Free Moves: Your Home, Our
                Expertise.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>Care Removals</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={bondcleaning}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={bondcleaning}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>
                <a href="/">Care Bond Cleaning</a>
              </h5>
              <div className="services-text">
                Transforming Spaces, Restoring Brilliance – Your Trusted Bond
                Cleaning Partner.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>Care Bond Cleaning</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={carpet}
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={carpet}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>
                <a href="/">Care Carpet Cleaning</a>
              </h5>
              <div className="services-text">
                Revitalize Your Space with Expert Carpet Cleaning Solutions!
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>Care Carpet Cleaning</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={tiles}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={tiles}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>
                <a href="/">Care Tiles Grout Cleaning</a>
              </h5>
              <div className="services-text">
                Revive Your Tiles: Grout Cleaning for Gleaming, Fresh Floors!
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>Cere Tiles Grout Cleaning</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={Handyman}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={Handyman}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>
                <a href="/">Care Handyman</a>
              </h5>
              <div className="services-text">
                Fixing, building, and improving – we've got your home covered.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>Care Handyman</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={Plumbers}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={Plumbers}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>
                <a href="/">Care Plumbers</a>
              </h5>
              <div className="services-text">
                Flow Solutions: Plumbing Excellence Delivered with Every Drop.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>Care Plumbers</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={gardening}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={gardening}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>
                <a href="/">Care Gardening</a>
              </h5>
              <div className="services-text">
                Cultivating Dreams, One Garden at a Time. Your Oasis Awaits.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon3.png"
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>Care Gardening</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={electrician}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={electrician}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>
                <a href="/">Care Electrician</a>
              </h5>
              <div className="services-text">
                Powering Your World with Expert Electrical Solutions and Service
                Excellence.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon2.png"
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>Care Electrician</h5>
            </div>
          </div>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={locksmith}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={locksmith}
              sizes="(max-width: 370px) 100vw, 370px"
            />
            <div className="box-content">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>
                <a href="/">Care Locksmith</a>
              </h5>
              <div className="services-text">
                Unlocking Solutions, Securing Peace: Your Trusted Locksmith
                Partner.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src="https://www.vwthemesdemo.com/vw-cleaning-company-pro/wp-content/themes/vw-cleaning-company-pro/assets/images/services/servicesicon1.png"
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>Care Locksmith</h5>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default AutoplayCarousel;
