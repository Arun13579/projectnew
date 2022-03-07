import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";
import hero from "./Assets/hero-img.png";
import Getbutton from "./Getbutton";

function Home() {
  return (
    <Container>
      <Row className="mt-5 pt-5">
        <Col
          className="homec pt-5 order-xs-2 order-sm-2 order-md-1 order-lg-1 order-xl-1 order-xxl-1"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <h1 className="pt-5">Grow your business with VEBBOX</h1>
          <h3 className="pt-3">
            We are team of talented developers making Excellent Solutions to
            business
          </h3>
          <p className="mt-5">
            <Getbutton name="Get Started" />
          </p>
        </Col>

        <Col
          className="homec order-xs-1 order-sm-1 order-md-2 order-lg-2 order-xl-2 order-xxl-2 mt-5"
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <img className="img-fluid" src={hero} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
