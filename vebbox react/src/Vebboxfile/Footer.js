import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <Row className="mt-5 bg-light">
        <Col className="text-center">
          <h6 className="pt-4">
            © Copyright VEBBOX SOFTWARE SOLUTIONS. All Rights Reserved Designed
            by vebbox software solutions
          </h6>
          <h1 className="my mt-1">ARUN.D</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
