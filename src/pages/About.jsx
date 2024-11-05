import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { AboutData } from "../Datas/AboutProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { clearFormData, setFormData } from "../Redux/Slices/formSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const About = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    benefits: [""],
    additionalBenefits: [""],
    categories: "",
  });

  const addField = (fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: [...prevFormData[fieldName], ""],
    }));
  };

  const deleteField = (fieldName, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: prevFormData[fieldName].filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (e, index, name) => {
    if (name === "benefits") {
      const newBenefits = [...formData.benefits];
      newBenefits[index] = e.target.value;
      setFormData({ ...formData, benefits: newBenefits });
    } else if (name === "additionalBenefits") {
      const newAdditionalBenefits = [...formData.additionalBenefits];
      newAdditionalBenefits[index] = e.target.value;
      setFormData({
        ...formData,
        additionalBenefits: newAdditionalBenefits,
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRedirect = (e) => {
    e.preventDefault()
    navigate('/additonalDetails')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFormData(formData));
    dispatch(clearFormData())
  };

  console.log(formData);
  return (
    <div className="aboutForm">
      <h2>About</h2>
      <Button onClick={handleRedirect}>View Product</Button>
      {AboutData.map((data, dataindex) => (
        <div>
          <Form key={dataindex}>
            <FormGroup className="formGroup">
              <FormLabel>
                {data.label} <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <FormControl
                type={data.AttributeType}
                as={data.textType}
                id={data.id}
                name={data.name}
                placeholder={data.placeholder}
                required={data.required}
                accept={data.accept}
                multiple={data.multiple}
                className={data.class}
                rows={data.rows}
                maxLength={data.maxLength}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </div>
      ))}
      <h3>Additional Details</h3>
      <div className="formGroup">
        <FormLabel>Benefits</FormLabel>
        {formData.benefits.map((benefit, index) => (
          <div key={index} className="inputField mb-2">
            <div style={{ minWidth: "300px" }}>
              <FormControl
                type="text"
                name="benefits"
                placeholder="Enter a benefit"
                value={benefit}
                onChange={(e) => {
                  handleInputChange(e, index, "benefits");
                }}
                required
              />
            </div>
            <div>
              {formData.benefits.length - 1 === index ? (
                <div>
                  <Button
                    className="btn btn-success"
                    onClick={() => addField("benefits")}
                  >
                    +
                  </Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteField("benefits", index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              ) : (
                <Button
                  className="btn btn-danger"
                  onClick={() => deleteField("benefits", index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              )}
            </div>
          </div>
        ))}

        <FormLabel>Additional Benefits</FormLabel>
        {formData.additionalBenefits.map((benefit, index) => (
          <div key={index} className="inputField mb-2">
            <div style={{ minWidth: "300px" }}>
              <FormControl
                type="text"
                name="additionalBenefits"
                placeholder="Enter an additional benefit"
                value={benefit}
                onChange={(e) => {
                  handleInputChange(e, index, "additionalBenefits");
                }}
                required
              />
            </div>
            <div>
              {formData.additionalBenefits.length - 1 === index ? (
                <div>
                  <Button
                    className="btn btn-success"
                    onClick={() => addField("additionalBenefits")}
                  >
                    +
                  </Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteField("additionalBenefits", index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              ) : (
                <Button
                  className="btn btn-danger"
                  onClick={() => deleteField("additionalBenefits", index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              )}
            </div>
          </div>
        ))}
        <FormLabel>Categories</FormLabel>
        <select
          name="categories"
          class="form-select"
          value={formData.categories}
          onChange={handleInputChange}
        >
          <option value="1">Men</option>
          <option value="2">Women</option>
          <option value="3">Kids</option>
        </select>
      </div>
      <Button className="button" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default About;
