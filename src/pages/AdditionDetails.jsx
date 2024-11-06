import React from "react";
import { useSelector } from "react-redux";
import Image from "./Equipment.jpg";
import { useNavigate } from "react-router-dom";
const AdditionalDetails = () => {
  const details = useSelector((state) => state.form);

  const navigate = useNavigate()
  const handleRedirect = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <h3>Form Data</h3>
      {details.map((form, index) => (
        <div className="container-cart">
          <div className="itemCart" key={index} onClick={()=> handleRedirect(form.id)}>
            <div className="first">
              <img src={Image} alt="" />
              {/* <img src={form.image} alt="" /> */}
              <span> {form.price} </span>
            </div>
            <div className="second">
              <h5> {form.name} </h5>
              <p>
          {form.description}
         </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalDetails;
