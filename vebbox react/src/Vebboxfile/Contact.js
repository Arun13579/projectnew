import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.fn = this.fn.bind(this);
  }

  fn() {
    alert("Successfully Sending Message ...");
  }

  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col className="mt-3" xs={12} sm={12} md={12} lg={4} xl={4} xll={4}>
            <div>
              <h2>VEBBOX</h2>
              <p className="pt-2">
                Our mission is to enhance business growth of our customers with
                creative design, development and to deliver market defining high
                quality solutions that create value and reliable competitive
                advantage to customers around the globe.
              </p>
              <div class="mx-auto mt-3">
                <i class="fa fa-twitter fa-1x cih"></i>
                <i class="fa fa-facebook fa-1x cih mx-2"></i>
                <i class="fa fa-instagram fa-1x cih mx-2"></i>
                <i class="fa fa-linkedin fa-1x cih mx-2"></i>
              </div>
            </div>
          </Col>

          <Col className="mt-3" xs={12} sm={12} md={12} lg={4} xl={4} xll={4}>
            <Row>
              <div>
                <Row>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                    <i class="fa fa-map-marker fa-2x contacticon"></i>
                  </Col>
                  <Col>
                    14, Mothilal St, (2nd Floor), Opposite to BSNL office near
                    chennai silks, Kumbakonam, 612001
                  </Col>
                </Row>
              </div>
              <div className="pt-4">
                <Row>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                    <i class="fa fa-envelope fa-1x"></i>
                  </Col>
                  <Col>nfo@vebbox.in</Col>
                </Row>
              </div>
              <div className="pt-4">
                <Row>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                    <i class="fa fa-phone fa-2x"></i>
                  </Col>
                  <Col>+91 8678 980 860</Col>
                </Row>
              </div>
            </Row>
          </Col>

          <Col className="mt-3" xs={12} sm={12} md={12} lg={4} xl={4} xll={4}>
            <div className="">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Subject" />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "130px" }}
                />
              </FloatingLabel>
              <div className="mt-3 text-center">
                <button
                  className="btn btn-outline-info navbutton"
                  onClick={this.fn}
                >
                  <b>Send Message</b>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
