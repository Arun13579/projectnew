import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Servicehead(props) {
  return (
    <Container fluid className="pt-5">
      <Row className="mt-5 pt-2">
        <Col
          className="text-center"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <h1>{props.head}</h1>
          <h6 className="mt-3">{props.text}</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Servicehead;
