import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";
import counts from "./Assets/counts.svg";
import smile from "./Assets/smile.svg";
import print from "./Assets/print.svg";
import clock from "./Assets/clock-.svg";
import trophy from "./Assets/trophy.svg";

function About2() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <img className="img-fluid" src={counts} height="90%" width="90%" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Row>
            <Col className="mt-4" xs={12} sm={12} md={12} lg={6} xl={6} xll={6}>
              <Row>
                <Col
                  className="pt-2"
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  xxl={2}
                >
                  <img src={smile} />
                </Col>
                <Col className="">
                  <h2>25</h2>
                  <b>
                    Happy Clients A satisfied customer is the best bussiness
                    goal.
                  </b>
                </Col>
              </Row>
            </Col>

            <Col className="mt-4" xs={12} sm={12} md={12} lg={6} xl={6} xll={6}>
              <Row>
                <Col
                  className="pt-2"
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  xxl={2}
                >
                  <img src={print} />
                </Col>
                <Col className="">
                  <h2>135</h2>
                  <b>Projects we build projects with satisfied customers</b>
                </Col>
              </Row>
            </Col>
            <Col className="mt-4" xs={12} sm={12} md={12} lg={6} xl={6} xll={6}>
              <Row>
                <Col
                  className="pt-2"
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  xxl={2}
                >
                  <img src={clock} />
                </Col>
                <Col className="">
                  <h2>12</h2>
                  <b>
                    Working Technologies We help enterprises accelerate adoption
                    of new technologies, produce innovation.
                  </b>
                </Col>
              </Row>
            </Col>
            <Col className="mt-4" xs={12} sm={12} md={12} lg={6} xl={6} xll={6}>
              <Row>
                <Col
                  className="pt-2"
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  xxl={2}
                >
                  <img src={trophy} />
                </Col>
                <Col className="">
                  <h2>25</h2>
                  <b>
                    Developers Our skilled technicians and engineers to
                    implement the new technologies.
                  </b>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About2;
