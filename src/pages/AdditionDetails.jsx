import React from "react";
import { useSelector } from "react-redux";

const AdditionalDetails = () => {
  const details = useSelector((state) => state.form);
  return (
    <div>
      <h3>Form Data</h3>
      <p>Name: {details.name}</p>
      <p>Description: {details.description}</p>
      <p>Price: {details.price}</p>
    </div>
  );
};

export default AdditionalDetails;
