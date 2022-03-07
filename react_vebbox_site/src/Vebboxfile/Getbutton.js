import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Getbutton(props) {
  return (
    <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
      <button className=" btn btn-outline-info">
        <b>{props.name}</b>
      </button>
    </Col>
  );
}

export default Getbutton;
