import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Stylemoose from "./Stylemoose.css";
import person1 from "./Assets/person1.jpg";

function Blogreplay() {
  return (
    <>
      <Container>
        <Row className="mt-3 mb-5">
          <Col className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 smallimg">
            <img
              className="smallimgsurcul"
              src={person1}
              height="100%"
              alt=""
            />
          </Col>
          <Col className="col">
            <h4>
              <b>John Doe</b>
            </h4>
            <h6 className="pt-3 pb-1">SEPTEMBER 28, 2020 AT 3:03PM</h6>
            <h5 className="pt-1 pb-2 lineheit">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </h5>
            <button className="bg-primary btn btn-outline-dark">
              <b>REPLAY</b>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blogreplay;
