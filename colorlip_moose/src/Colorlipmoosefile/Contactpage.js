import React, { useEffect } from "react";
import Stylemoose from "./Stylemoose.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import map from "./Assets/map.jpg";
import Contacttextbox from "./Contacttextbox";
import AOS from "aos";

export function Contactdiv1({ head, text, icon }) {
  return (
    <>
      <Col
        className="mx-auto text-center mt-2 mb-4"
        xs={12}
        sm={12}
        md={6}
        lg={13}
        xl={3}
        xll={3}
      >
        <Col className="col-12">
          <span className={`${icon}`}></span>
        </Col>
        <Col className="col-12 mt-3 mb-2">
          <h5>
            <b> {head}</b> {text}
          </h5>
        </Col>
      </Col>
    </>
  );
}

export function Contactdiv2() {
  useEffect(() => {
    AOS.init();
  });
  const fn = () => {
    alert("Successfully Sending Message ...");
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col
            className="mt-2 mb-3 contactmap bg-light pt-3 px-3"
            xs={12}
            sm={12}
            md={6}
            xl={6}
            xxl={6}
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <Contacttextbox head="Contact Us" button="Send Message" fn={fn} />
          </Col>
          <Col
            className="mt-2 mb-3 contactmap m-0 p-0"
            xs={12}
            sm={12}
            md={6}
            xl={6}
            xxl={6}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={map} alt="" className="p-0 m-0 contactimgheit" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
