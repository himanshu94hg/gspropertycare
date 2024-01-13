import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import SmallLogo from "../Logo/SmallLogo";
import QueryForm from "../Header/QueryForm";

function ProductDetail() {
  const { productName } = useParams();
  const thisProduct = productsData.find((prod) => prod.name === productName);

  return (
    <>
      <section className="container">
        <div className="main_title product-main">
          <SmallLogo />
          <h1 className="product-heading">
            {thisProduct.service}
            <span className="product-des">{thisProduct.Byline}</span>
          </h1>
        </div>

        <div className="" style={{ paddingBottom: "75px" }}>
          <div className="product-banner">
            <img
              src={require(`../assets/img/services/servicePage/${thisProduct.backimageUrl}`)}
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>

        <artcle id="" className="">
          <div className="container">
            <div className="news-head section_main_head text-center pb-5 block_head">
              {/* <SmallLogo /> */}
              <h3>{thisProduct.SecondHeading}</h3>
              <p>{thisProduct.SecondDes}</p>
            </div>
          </div>
        </artcle>

        <artcle id="" className="">
          <div className="container">
            <div className="news-head section_main_head text-center pb-5 block_head">
              {/* <SmallLogo /> */}
              <h3>{thisProduct.ThirdHeading}</h3>
              <span>{thisProduct.ThirdDes}</span>
            </div>
            <div className="section-des">
              <p>
                <span className="text-heading">{thisProduct.pointOne}</span>
                {thisProduct.pointOneDes}
              </p>
              <p>
                <span className="text-heading">{thisProduct.pointTwo}</span>
                {thisProduct.pointTwoDes}
              </p>
              <p>
                <span className="text-heading">{thisProduct.pointThree}</span>
                {thisProduct.pointThreeDes}
              </p>
              <p>
                <span className="text-heading">{thisProduct.pointFour}</span>
                {thisProduct.pointFourDes}
              </p>
              <p>
                <span className="text-heading">{thisProduct.pointFive}</span>
                {thisProduct.pointFiveDes}
              </p>
              <p>
                <span className="text-heading">{thisProduct.pointSix}</span>
                {thisProduct.pointSixDes}
              </p>
            </div>
          </div>
        </artcle>

        <article id="" className="">
          <div className="container">
            <div className="news-head section_main_head text-center pb-5 block_head">
              {/* <SmallLogo /> */}
              <h3>{thisProduct.FourthHeading}</h3>
              <span>{thisProduct.FourthDes}</span>
            </div>
            <div className="section-des">
              <p>
                <span className="text-heading">
                  {thisProduct.FourthPointOne}
                </span>
                {thisProduct.FourthPointOneDes}
              </p>
              <p>
                <span className="text-heading">
                  {thisProduct.FourthPointTwo}
                </span>
                {thisProduct.FourthPointTwoDes}
              </p>
              <p>
                <span className="text-heading">
                  {thisProduct.FourthPointThree}
                </span>
                {thisProduct.FourthPointThreeDes}
              </p>
              <p>
                <span className="text-heading">
                  {thisProduct.FourthPointFourth}
                </span>
                {thisProduct.FourthPointFourthDes}
              </p>
              <p>
                <span className="text-heading">
                  {thisProduct.FourthPointFifth}
                </span>
                {thisProduct.FourthPointFifthDes}
              </p>
            </div>
          </div>
        </article>

        <article id="" className="">
          <div className="container">
            <div className="news-head section_main_head text-center pb-5 block_head">
              {/* <SmallLogo /> */}
              <h3>{thisProduct.FifthHeading}</h3>
              <span>{thisProduct.FifthDes}</span>
            </div>
          </div>
        </article>

        <article id="" className="">
          <div className="container">
            <div className="news-head section_main_head text-center pb-5 block_head">
              {/* <SmallLogo /> */}
              <h3>{thisProduct.SixthHeading}</h3>
              <span></span>
            </div>
          </div>
        </article>

        <div className="container product-form">
          <QueryForm />
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
