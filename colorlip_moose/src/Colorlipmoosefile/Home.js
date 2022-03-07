import React, { useEffect } from "react";
import "aos/dist/aos.css";
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
import Stylemoose from "./Stylemoose.css";
import person1 from "./Assets/person1.jpg";
import AOS from "aos";

export function Pagehome() {
  return (
    <>
      <Container>
        <Col
          className="mx-auto text-center mb-5 mt-5 pt-5"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xll={12}
        >
          <h1 className="texts1">
            M<span className="texts2">oo</span>
            se
          </h1>
        </Col>
        <Row className="mt-3 mb-3">
          <Col
            className="mx-auto mt-2 mb-2"
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
            xll={7}
          >
            <h2 className="texts3 mt-2">
              Hello! I'm Giller Moose, I Provide Newest News Update About
              Digital
            </h2>
            <b className="texts3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </b>
          </Col>
          <Col
            className="mx-auto mt-2 mb-2"
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            xll={5}
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
            <b className="texts3 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </b>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function Divimage(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Col
        className="firstimgs1 mx-auto p-0 m-0"
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        xll={6}
      >
        <img
          src={props.imgpath}
          height="100%"
          width="100%"
          className="bg-info"
          alt=""
          data-aos="flip-left"
          data-aos-duration="3000"
        />
      </Col>
    </>
  );
}

export function Divtextcom(props) {
  const { perimg, bgc, color, color2 } = props;

  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Col
        className={`px-3 mx-auto pt-5 pb-5 ${bgc} ${color}`}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        xll={6}
        // className={props.bgc}
        data-aos="zoom-in-down"
        data-aos-duration="3000"
      >
        <div>
          <h6 className={`pt-5 mt-5 ${color} ${color2}`}>
            <span class="fa fa-calendar mx-2"></span>SEPT. 27, 2020
            <span class="fa fa-user mx-2"></span>ADMIN
            <span class="fa fa-comment mx-2"></span>3
          </h6>
          <h1 className={`textdiv2s pt-2 ${color}`}>
            Turning a digital brand into a real world experience
          </h1>
          <Row className="mt-5 mb-5">
            <Col
              className="smallimg"
              xs={3}
              sm={3}
              md={3}
              lg={2}
              xl={2}
              xll={2}
            >
              <img
                className="smallimgsurcul"
                src={perimg}
                height="100%"
                alt=""
              />
            </Col>
            <Col
              className={`col pt-3 ${color}`}
              // xs={9}
              // sm={9}
              // md={9}
              // lg={9}
              // xl={9}
              // xll={9}
            >
              <h5 className={`px-2 ${color2} ${color}`}>Jamie Jonson</h5>
              <b className={`px-2 ${color2} ${color}`}>CEO, PRODUCT DESIGNER</b>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export function Viewbutton() {
  return (
    <>
      <Container fluid>
        <Row className="mt-5 pt-5 pb-5 mb-5">
          <Col
            className="mx-auto text-center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <a href="" className="anger">
              <h3 className="btcolor">
                View all articals <span className="fa fa-chevron-right"></span>
              </h3>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
