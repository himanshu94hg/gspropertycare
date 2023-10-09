import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import SmallLogo from "../Logo/SmallLogo";
import QueryForm from "../Header/QueryForm";

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  return (
    <>
      <div className="container main_title">
        <SmallLogo />
        <h1 className="product-heading">{thisProduct.name}</h1>
      </div>

      <div className="container" style={{ paddingBottom: "75px" }}>
        <div id="services_single" className="product row">
          <div className="services-image product col-4">
            <img
              src={require(`../assets/img/services/service/${thisProduct.imageUrl}.png`)}
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="single-page-content col-8">
            <p>{thisProduct.descriptionFull}</p>
          </div>
        </div>
      </div>
      <div className="container product-form">
        <QueryForm />
      </div>
    </>
  );
}

export default ProductDetail;
