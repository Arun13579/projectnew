import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Stylemoose from "./Stylemoose.css";
import { Route, Link } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import AOS from "aos";

export function Articlesdiv1({ img, iconimg, color, color2 }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Col>
        <Card
          style={{ width: "23rem" }}
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
          xxl={4}
          className="mt-3 mb-3 mx-auto"
          data-aos="zoom-out"
        >
          <Link to="/Blogdetails.js" className="anger">
            <Card.Img variant="top" src={img} className="cardimgsize" />
          </Link>
          <Card.Body>
            <Card.Text>
              <div>
                <h6 className={`pt-3 ${color} ${color2}`}>
                  <span class="fa fa-calendar mx-2"></span>SEPT. 27, 2020
                  <span class="fa fa-user mx-2"></span>ADMIN
                  <span class="fa fa-comment mx-2"></span>3
                </h6>
                <Link to="/Blogdetails.js" className="anger">
                  <h2 className={`pt-2 ${color2}`}>
                    Turning a digital brand into a real world experience
                  </h2>
                </Link>
                <Row className="mt-4 mb-3">
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
                      src={iconimg}
                      height="100%"
                      alt=""
                    />
                  </Col>
                  <Col
                    className={`mx-3 col pt-3 ${color}`}
                    // xs={9}
                    // sm={9}
                    // md={9}
                    // lg={9}
                    // xl={9}
                    // xll={9}
                  >
                    <h5 className={`px-2 ${color2} ${color}`}>Jamie Jonson</h5>
                    <b className={`px-2 ${color2} ${color}`}>
                      CEO, PRODUCT DESIGNER
                    </b>
                  </Col>
                </Row>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export function Articlesdiv2() {
  const a = "<";
  const b = ">";
  return (
    <>
      <Container>
        <Row className="pt-5 pb-5">
          <Col className="mx-auto mt-5 mb-5 text-center">
            <button className="mx-2 btn btn-outline-primary">
              <b> {a}</b>
            </button>
            <Button className="mx-2">
              <b> 1</b>
            </Button>
            <button className="mx-2 btn btn-outline-primary">
              <b> 2</b>
            </button>
            <button className="mx-2 btn btn-outline-primary">
              <b> 3</b>
            </button>
            <button className="mx-2 btn btn-outline-primary">
              <b> 4</b>
            </button>
            <button className="mx-2 btn btn-outline-primary">
              <b> 5</b>
            </button>
            <button className="mx-2 btn btn-outline-primary">
              <b>{b}</b>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
