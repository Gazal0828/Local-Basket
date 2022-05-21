import React from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faTag,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesComponent = () => {
  const featureStyle = {
    fontSize: "2rem",
    border: "2px solid #ccc",
    borderRadius: "7px",
    padding: "1.2rem",
    margin: "0.5rem",
    background: "#fff",
  };

  return (
    <>
      <Row className="my-4">
        <div className="d-flex justify-content-evenly">
          <div>
            <FontAwesomeIcon icon={faTruckFast} style={featureStyle} />
            <h5>Fast Delivery</h5>
          </div>

          <div>
            <FontAwesomeIcon icon={faTag} style={featureStyle} />
            <h5>Better Price</h5>
          </div>

          <div>
            <FontAwesomeIcon icon={faBoxOpen} style={featureStyle} />
            <h5>Wide Variety</h5>
          </div>

          <div>
            <FontAwesomeIcon icon={faTruckFast} style={featureStyle} />
            <h5>Easy Return Policy</h5>
          </div>
        </div>

        {/* <Col md={3} className=" border border-1">
          <FontAwesomeIcon icon={faTruckFast} style={featureStyle} />
          <h5>Fast Delivery</h5>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon icon={faTag} style={featureStyle} />
          <h5>Better Price</h5>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon icon={faBoxOpen} style={featureStyle} />
          <h5>Wide Variety</h5>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon icon={faBoxOpen} style={featureStyle} />
          <h5>Easy Return Policy</h5>
        </Col> */}
      </Row>
    </>
  );
};

export default FeaturesComponent;
