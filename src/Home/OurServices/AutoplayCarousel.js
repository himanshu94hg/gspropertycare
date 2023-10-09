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
import CleaningIcon from "../../assets/img/services/icons/cleaning.png";
import RemovalIcon from "../../assets/img/services/icons/removal.png";
import CarpetIcon from "../../assets/img/services/icons/carpet.png";
import tilesIcon from "../../assets/img/services/icons/tiles.png";
// import handymenIcon from "../../assets/img/services/icons/handymen.png";
import PlumberIcon from "../../assets/img/services/icons/plumber.png";
import GardeningIcon from "../../assets/img/services/icons/gardening.png";
import ElectricianIcon from "../../assets/img/services/icons/electrician.png";
import locksmithIcon from "../../assets/img/services/icons/locksmith.png";
import "slick-carousel/slick/slick-theme.css";
import SmallLogo from "../../Logo/SmallLogo";

const AutoplayCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: window.innerWidth > 991 ? 100000 : 2000,
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
                {" "}
                <img src={RemovalIcon} alt="RemovalIcon" />
              </span>
              <h5>
                <a href="/">Care Removals</a>
              </h5>
              <div className="services-text">
                We believe that moving should be stress-free and we make it
                possible for our customers. You get efficient and reliable
                service that ensures a smooth transition to the new home.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img src={RemovalIcon} alt="RemovalIcon" />
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
                <img src={CleaningIcon} alt="CleaningIcon" />
              </span>
              <h5>
                <a href="/">Care Bond Cleaning</a>
              </h5>
              <div className="services-text">
                Our experts in bond cleaning guarantee you secure the bond back
                hassle-free with clean rental property which is cleaned with our
                eco-friendly cleaning solutions.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img src={CleaningIcon} alt="CleaningIcon" />
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
                <img src={CarpetIcon} alt="Alt Tag for Services meta image3" />
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
                <img src={CarpetIcon} alt="Alt Tag for Services meta image3" />
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
                <img src={tilesIcon} alt="Alt Tag for Services meta image2" />
              </span>
              <h5>
                <a href="/">Care Tiles Grout Cleaning</a>
              </h5>
              <div className="services-text">
                With tile and grout cleaning, you can restore the beauty of your
                floors. It's time to say goodbye to stains and help to clean and
                fresh surfaces.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img src={tilesIcon} alt="Alt Tag for Services meta image2" />
              </span>
              <h5>Care Tiles Grout Cleaning</h5>
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
                <img src={PlumberIcon} alt="Alt Tag for Services meta image2" />
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
                <img src={PlumberIcon} alt="Alt Tag for Services meta image2" />
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
                <img src={PlumberIcon} alt="Alt Tag for Services meta image3" />
              </span>
              <h5>
                <a href="/">Care Plumbers</a>
              </h5>
              <div className="services-text">
                Plumbing issues can occur anytime and we aim to tackle the issue
                promptly with our plumbing services.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img src={PlumberIcon} alt="Alt Tag for Services meta image3" />
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
                  src={GardeningIcon}
                  alt="Alt Tag for Services meta image1"
                />
              </span>
              <h5>
                <a href="/">Care Gardening</a>
              </h5>
              <div className="services-text">
                Gardening maintenance is necessary to nurture your green spaces
                and we can help you create beautiful outdoor environments for
                you to relish.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src={GardeningIcon}
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
                  src={ElectricianIcon}
                  alt="Alt Tag for Services meta image2"
                />
              </span>
              <h5>
                <a href="/">Care Electrician</a>
              </h5>
              <div className="services-text">
                Our auto electrical experts can help keep your vehicle’s
                electrical systems in top-notch condition. Our reliable
                solutions can help you drive safely.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src={ElectricianIcon}
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
                  src={locksmithIcon}
                  alt="Alt Tag for Services meta image3"
                />
              </span>
              <h5>
                <a href="/">Care Locksmith</a>
              </h5>
              <div className="services-text">
                We take security solutions seriously. Our locksmith solutions
                offer peace of mind and you get lock installations to emergency
                lockout assistance.
              </div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src={locksmithIcon}
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
