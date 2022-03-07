import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Servicediv(props) {
  return (
    <Col
      className="text-center mt-4"
      xs={12}
      sm={12}
      md={6}
      lg={3}
      xl={3}
      xxl={3}
    >
      <div className="serdivheit btn">
        <span class="icon fa fa-globe fa-3x mt-3"></span>
        <h4 className="mt-3">{props.head}</h4>
        <p className="mt-3">{props.text}</p>
      </div>
    </Col>
  );
}

export default Servicediv;
