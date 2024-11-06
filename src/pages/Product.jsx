import React from "react";
import Image from "./Equipment.jpg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Product = () => {

    const {id} = useParams();
    const products = useSelector((state) => state.form)
    const product = products.find((product) => product.id === parseInt(id, 10));
    if (!product) return <div>Product Not Found</div>;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Details</h1>
      <div className="productPage">
        <div className="productImg">
          <img src={Image} alt="" />
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}> {product.name} </h3>
          <p>
            {product.description}
          </p>
          <p className="price">
            Price : <span> {product.price} </span>
          </p>
        </div>
        <div className="benefits">
          <p>Benefits</p>
          <ul>
            {product.benefits.map((benefit,index) => (
                <li key={index}> {benefit} </li>
            ))}
          </ul>
        </div>
        <div className="additional">
          <p>Additional Benefits</p>
          <ul>
          {product.additionalBenefits.map((addbenefit,index) => (
                <li key={index}> {addbenefit} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
