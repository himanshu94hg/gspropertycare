import { FiMenu } from "react-icons/fi";
import "./header.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <>
      <div className="home">
        <div className="page-template">
          <div className="heaader">
            <div className="header-menu">
              <div className="header-wrap">
                <section id="topbar">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 topbar-address">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>ADDRESS : </span>
                        <small>22 Gray St, Plympton SA 5038, Australia </small>
                      </div>
                      <div className="col-lg-6 col-md-6 topbar-email">
                        <i className="far fa-envelope"></i>
                        <span>MAIL : </span>
                        <small>
                          <span className="p-0">
                            <a
                              href="mailto:quotes@gsbondcleaning.com.au"
                              target="_blank"
                              rel="noreferrer"
                            >
                              quotes@gsbondcleaning.com.au
                            </a>
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="sticky-menu">
                  <div className="container lower-header">
                    <div className="nav_wrap">
                      <div className="main-header-box">
                        <div className="row header-app-button align-items-center">
                          <div className="col-lg-3 col-md-6 col logo-div">
                            <div className="logo text-left">
                              <a
                                href="/"
                                className="custom-logo-link"
                                rel="home"
                                aria-current="page"
                              >
                                <Logo />
                              </a>
                              <div className="logo-text"></div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col header-call">
                            <div className="row d-flex justify-content-md-center justify-content-lg-end">
                              <div className="media call-icon">
                                <i className="d-flex mr-3 fas fa-phone"></i>
                                <div className="media-body">
                                  <p>PHONE </p>
                                  <small>
                                    <a href="tel:+08 8444 0442">
                                      +08 8444 0442
                                    </a>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 social-box-div">
                            <div className="socialbox">
                              <a
                                className="twitter"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fab fa-twitter align-middle"></i>
                                <span className="screen-reader-text">
                                  twitter
                                </span>
                              </a>
                              <a
                                className="insta"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fab fa-instagram align-middle"></i>
                                <span className="screen-reader-text">
                                  instagram
                                </span>
                              </a>
                              <a
                                className="facebook"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fab fa-facebook-f align-middle "></i>
                                <span className="screen-reader-text">
                                  facebook
                                </span>
                              </a>
                              <a
                                className="youtube"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="fab fa-youtube align-middle"></i>
                                <span className="screen-reader-text">
                                  youtube
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 header-button">
                            <a className="theme_blue_button" href="/">
                              <i className="far fa-calendar-alt"></i>
                              BOOK AN APPOINTMENT
                              <span className="screen-reader-text">
                                video button
                              </span>
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 hamberger-icon text-right">
                            <FiMenu size={24} />
                          </div>
                        </div>

                        <div className="row menu-box">
                          <div className="col-lg-11 col-md-11 col-6 header-nav">
                            <div className="menubar m-0 mt-md-0">
                              <div className="right_menu">
                                <div className="innermenubox">
                                  <div className="main-header">
                                    <div id="mySidenav" className="nav sidenav">
                                      <nav
                                        id="site-navigation"
                                        className="main-navigation"
                                      >
                                        <div className="menu clearfix m-auto">
                                          <ul
                                            id="menu-primary-menu"
                                            className="clearfix mobile_nav"
                                          >
                                            <li
                                              id="menu-item-59"
                                              className="home menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-59"
                                            >
                                              <a href="/" aria-current="page">
                                                Home
                                              </a>
                                            </li>
                                            <li
                                              id="menu-item-60"
                                              className="blog menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-60"
                                            >
                                              <a href="/" className="blogLink">
                                                Blog
                                              </a>
                                              <ul className="sub-menu">
                                                <li
                                                  id="menu-item-74"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"
                                                >
                                                  <a href="/">
                                                    Blog Right Sidebar
                                                  </a>
                                                </li>
                                                <li
                                                  id="menu-item-75"
                                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"
                                                >
                                                  <a href="/">
                                                    Blog Left Sidebar
                                                  </a>
                                                </li>
                                              </ul>
                                            </li>
                                            <li
                                              id="menu-item-61"
                                              className="page menu-item menu-item-type-custom menu-item-object-custom menu-item-61"
                                            >
                                              <a href="/">Page</a>
                                            </li>
                                            <li
                                              id="menu-item-63"
                                              className="services menu-item menu-item-type-custom menu-item-object-custom menu-item-63"
                                            >
                                              <a href="/">Services</a>
                                            </li>
                                            <li
                                              id="menu-item-64"
                                              className="work menu-item menu-item-type-custom menu-item-object-custom menu-item-64"
                                            >
                                              <a href="/">Work</a>
                                            </li>
                                            <li
                                              id="menu-item-89"
                                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                                            >
                                              <a href="/">Clients</a>
                                            </li>
                                            <li
                                              id="menu-item-73"
                                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"
                                            >
                                              <a href="/">Contact</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </nav>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
