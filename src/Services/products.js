import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import SmallLogo from "../Logo/SmallLogo";
import "./Services.css";

const Products = () => {
  const products = productsData.map((product) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
        <Link to={`/Services/${product.name}`}>
          <div className="box services-info ">
            <img
              width={370}
              height={216}
              src={require(`../assets/img/services/service/${product.imageUrl}.png`)}
              alt=""
              decoding="async"
              loading="lazy"
            />
            <div className="box-content">
              <span>
                <img
                  src={require(`../assets/img/services/icons/${product.imageIconUrl}.png`)}
                  alt="RemovalIcon"
                />
              </span>
              <h5>{product.service}</h5>
              <div className="services-text">{product.description}</div>
            </div>
            <div className="services-box">
              <span>
                <img
                  src={require(`../assets/img/services/icons/${product.imageIconUrl}.png`)}
                  alt="RemovalIcon"
                />
              </span>
              <h5>Care Removals</h5>
              <div className="services-text outer-main">
                {product.description}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="container main_title">
        <SmallLogo />
        <h1>Services we Offer to our Customers</h1>
      </div>

      <div className="container inner_layout" id="service-page">
        <main id="maincontent" role="main">
          <div className="middle-content">
            <article
              id="post-13"
              className="post-13 page type-page status-publish hentry"
            >
              <div className="row services-short" id="our-services">
                {products}
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default Products;
