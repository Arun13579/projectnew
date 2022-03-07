import React from "react";
import Stylemoose from "./Stylemoose.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import person1 from "./Assets/person1.jpg";

export function Aboutdiv1() {
  return (
    <>
      <Container>
        <Row className="pb-5">
          <Col
            className="mt-2 mb-2"
            xs={12}
            sm={12}
            md={{ span: 3, offset: 1 }}
            lg={{ span: 3, offset: 1 }}
            xl={{ span: 3, offset: 1 }}
            xxl={{ span: 3, offset: 1 }}
          >
            <Col
              className="smallimg"
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              xll={3}
            >
              <img
                className="smallimgsurcul"
                src={person1}
                height="100%"
                alt=""
              />
            </Col>
            <h4 className="mt-2 texts3">Giller Moose</h4>
            <b className="texts3 mt-2 color2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </b>
            <p className="mt-3">
              <a href="#" className="mt-5 anger">
                <span className="fa fa-twitter mx-2 foot"></span>
                <span className="fa fa-facebook mx-2 foot"></span>
                <span className="fa fa-instagram mx-2 foot"></span>
              </a>
            </p>
          </Col>
          <Col className="mb-5" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <h1 className="mx-4">
              Hello! I'm Giller Moose, I Provide Newest News Update About
              Digital
            </h1>
            <h5 className="mx-4 mt-4 mb-4 color2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </h5>
            <h5 className="mx-4 mt-4 mb-4 color2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </h5>
            <h5 className="mx-4 mt-4 mb-4 color2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </h5>
            <h1 className="mx-4 mt-4 mb-3">How I Work</h1>
            <h5 className="mx-4 mt-1 mb-5 color2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}
