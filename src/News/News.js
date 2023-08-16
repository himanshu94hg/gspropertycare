import React from "react";
import "../Home/Home.css";
import newsOne from "../assets/img/news1.webp";
import newsTwo from "../assets/img/news2.webp";
import newsThree from "../assets/img/news3.webp";
import newsFour from "../assets/img/3.webp";
import newsFive from "../assets/img/1.webp";
import SmallLogo from "../Logo/SmallLogo";

const News = () => {
  return (
    <>
      <section id="latest-news" className="">
        <div className="container">
          <div className="news-head section_main_head text-center pb-5 block_head">
            <SmallLogo />
            <small>OUR BLOG </small>
            <h3>LATEST NEWS </h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="news-box1">
                <div className="news-image">
                  <span>09 Jul 2021</span>
                  <img
                    width={570}
                    height={300}
                    src={newsOne}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    decoding="async"
                    loading="lazy"
                    srcSet={newsOne}
                    sizes="(max-width: 570px) 100vw, 570px"
                  />
                </div>
                <h5>
                  <a href="/">BLOG TITLE NUMBER 1</a>
                </h5>
                <div className="news-text">
                  Te obtinuit ut adepto satis somno. Aliisque institoribus iter
                  deliciae vivet vita. Nam exempli gratia, quotiens ego vadam ad
                  diversorum peregrinorum in mane ut effingo ex contractus, hi
                  viri qui sedebat ibi usque semper illis
                </div>
                <div className="news-icon-box">
                  <div className="row">
                    <div className="col-lg-5 col-md-4 col-sm-5 news-share-icon">
                      <span className="share_text">Share: </span>
                      <a href="/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f" />
                        <span className="screen-reader-text">facebook.com</span>
                      </a>
                      <a href="/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in" />
                        <span className="screen-reader-text">linkedin.com</span>
                      </a>
                      <a href="/" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter" />
                        <span className="screen-reader-text">twitter.com</span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3 news-comments">
                      <span className="blog-comments">
                        <i className="fas fa-comment-dots" />0 Comment
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 news-button">
                      <a href="/">
                        READ MORE
                        <span className="screen-reader-text">blog tittle</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 news-box2">
                  <div className="news-image">
                    <span>09 Jul 2021</span>
                    <img src={newsTwo} alt="Alt Tag for latest-news img2" />
                  </div>
                  <h5>BLOG TITLE NUMBER 2</h5>
                  <div className="news-icon-box">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 news-comments">
                        <span className="blog-comments">
                          <i className="fas fa-comment-dots" />0 Comment
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 news-button">
                        <a href="/">READ MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 news-box2">
                  <div className="news-image">
                    <span>09 Jul 2021</span>
                    <img src={newsThree} alt="Alt Tag for latest-news img3" />
                  </div>
                  <h5>BLOG TITLE NUMBER 3</h5>
                  <div className="news-icon-box">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 news-comments">
                        <span className="blog-comments">
                          <i className="fas fa-comment-dots" />0 Comment
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 news-button">
                        <a href="/">READ MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 news-box2">
                  <div className="news-image">
                    <span>09 Jul 2021</span>
                    <img src={newsFour} alt="Alt Tag for latest-news img4" />
                  </div>
                  <h5>BLOG TITLE NUMBER 4</h5>
                  <div className="news-icon-box">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 news-comments">
                        <span className="blog-comments">
                          <i className="fas fa-comment-dots" />0 Comment
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 news-button">
                        <a href="/">READ MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 news-box2">
                  <div className="news-image">
                    <span>09 Jul 2021</span>
                    <img src={newsFive} alt="Alt Tag for latest-news img5" />
                  </div>
                  <h5>BLOG TITLE NUMBER 5</h5>
                  <div className="news-icon-box">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 news-comments">
                        <span className="blog-comments">
                          <i className="fas fa-comment-dots" />0 Comment
                        </span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 news-button">
                        <a href="/">READ MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
