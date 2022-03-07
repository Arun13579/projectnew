import React from "react";
import Stylemoose from "./Stylemoose.css";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
export function Footer(props) {
  return (
    <>
      <Container fluid>
        <Row ClassName="mt-5">
          <Col
            className="pt-5 pb-5 bg-light"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <Col
              xs={12}
              sm={9}
              md={7}
              lg={6}
              xl={6}
              xxl={6}
              className="mx-auto text-center mt-5 mb-5"
            >
              <h2 className="color2 mt-2 mb-4">
                <b>Subscribe to our Newsletter</b>
              </h2>
              <InputGroup size="lg" className="mt-3">
                <FormControl
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Enter email adderss"
                />
                <Button
                  id="inputGroup-sizing-lg"
                  className="bg-dark"
                  type="button"
                >
                  <b className="color">Subscribe</b>
                </Button>
              </InputGroup>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="pt-5 pb-2 bg-dark">
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={{ span: 3, offset: 1 }}
            xl={{ span: 3, offset: 1 }}
            xxl={{ span: 3, offset: 1 }}
            className="color mt-5 mb-5"
          >
            <h3>Moose</h3>
            <p className="mt-4">
              <b>
                Far far away, behind the word mountains, far from the countries.
              </b>
            </p>
            <a href="#" className="mt-5 anger">
              <span className="fa fa-twitter mx-2 foot"></span>
              <span className="fa fa-facebook mx-2 foot"></span>
              <span className="fa fa-instagram mx-2 foot"></span>
            </a>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={{ span: 2, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
            xxl={{ span: 2, offset: 1 }}
            className="color mt-5 mb-5"
          >
            <h3 className="mx-2 mx-sm-1 mx-md-4 px-md-2 mx-lg-1 mx-xl-1 mx-xxl-1">
              Info
            </h3>
            <h6 className="mt-4">
              <a
                href="#"
                className="mt-5 anger color mx-md-4 mx-lg-1 mx-xl-1 mx-xxl-1"
              >
                <span className="fa fa-chevron-right mx-2 my-1"></span>
                <b>Blog</b>
              </a>
            </h6>
            <h6>
              <a
                href="#"
                className="mt-5 anger color mx-md-4 mx-lg-1 mx-xl-1 mx-xxl-1"
              >
                <span className="fa fa-chevron-right mx-2 my-1"></span>
                <b>Career</b>
              </a>
            </h6>
            <h6>
              <a
                href="#"
                className="mt-5 anger color mx-md-4 mx-lg-1 mx-xl-1 mx-xxl-1"
              >
                <span className="fa fa-chevron-right mx-2 my-1"></span>
                <b>About</b>
              </a>
            </h6>
            <h6>
              <a
                href="#"
                className="mt-5 anger color mx-md-4 mx-lg-1 mx-xl-1 mx-xxl-1"
              >
                <span className="fa fa-chevron-right mx-2 my-1"></span>
                <b>Team</b>
              </a>
            </h6>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={4}
            xxl={4}
            className="color mt-5 mb-5"
          >
            <h3>Have a Questions ?</h3>
            <Col className="mt-4">
              <Row>
                <Col className="" xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                  <span className="icon fa fa-map marker"></span>
                </Col>
                <Col
                  className=""
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                  xll={11}
                >
                  <b>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </b>
                </Col>
              </Row>
            </Col>
            <Col className="mt-2">
              <Row>
                <Col className="" xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                  <span className="icon fa fa-phone"></span>
                </Col>
                <Col
                  className=""
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                  xll={11}
                >
                  <b>+2 392 3929 210</b>
                </Col>
              </Row>
            </Col>
            <Col className="mt-2">
              <Row>
                <Col className="" xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                  <span className="icon fa fa-paper-plane pr-4"></span>
                </Col>
                <Col
                  className=""
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                  xll={11}
                >
                  <b>info@yourdomain.com</b>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col className="mt-5 pt-3 mx-auto text-center color col-12">
            <b>
              Copyright ©2022 All rights reserved | This template is made with
              by Colorlib
            </b>
            <h1 className="my">D.ARUN</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
