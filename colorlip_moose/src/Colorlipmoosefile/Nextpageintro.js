import React from "react";
import { Homecall } from "./Navandhome";
import Stylemoose from "./Stylemoose.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function Nextpageintro({ link, head, first, second, third }) {
  return (
    <>
      <Container fluid>
        <Row className="mt-5 pt-5 mb-5 pb-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className="text-center mt-5 pt-1 pb-1"
          >
            <h1 className="color2 fontsize">{head}</h1>
            <Row className="mt-3 color2">
              <h6>
                <span className="mx-2">
                  <Link to={link} className="anger">
                    {first} <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>
                <span className="mx-2">
                  {second} <i className="fa fa-chevron-right"></i>
                </span>
              </h6>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nextpageintro;
