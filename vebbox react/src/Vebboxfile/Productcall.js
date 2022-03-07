import React from "react";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";

function Productcall() {
  return (
    <Container>
      <Row className="mt-3">
        <Product
          head="Data Analyzer"
          text="The systematic application of statistical and logical techniques
         to describe the data scope, modularize the data structure illustrate via images,
          tables, and graphs."
        />

        <Product
          head="Websites"
          text="We create a enhanced website, customers can easily access information about your business.
         They can see what products or services you sell, your prices, your location and much more."
        />

        <Product
          head="Billing Sofware"
          text="A billing software can be any software designed to handle time and billing tracking as
         well as invoicing customers for services and products."
        />

        <Product
          head="Industrial Trainings"
          text="Our Industrial Training is to expose the students to actual working environment
         and enhance their knowledge and skill from what they have learned in the college."
        />
      </Row>
    </Container>
  );
}

export default Productcall;
