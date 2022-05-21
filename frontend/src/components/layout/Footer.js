import React from "react";
import { Container } from "react-bootstrap";
import FeaturesComponent from "./FeaturesComponent";
const Footer = () => {
  return (
    <>
      <footer className="border-top text-center bg-light text-muted mt-4 position-relative bottom-0 w-100">
        <Container>
          <FeaturesComponent />
        </Container>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
        >
          (c) 2022 Local Basket. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
