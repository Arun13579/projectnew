import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function About(props) {
  return (
    <Col className="mt-2" xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
      <div className="aboutts">{props.text}</div>
    </Col>
  );
}

export default About;
