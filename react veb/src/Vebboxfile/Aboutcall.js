import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import About2 from "./About2";

function Aboutcall() {
  return (
    <Container>
      <Row className="mt-4">
        <About
          text="We are consummate custom software Development company delivering splendid
           business IT Solutions and related services to customers across the globe. Our development
            services are led by our dedicated and passionate team to provide best industry practices 
            combined with technology expertise and business domain knowledge to drive digital 
            transformation."
        />
        <About
          text="Our proficiency in understanding business challenges and professional
           competence allows us to create a better expwerience for our customers. Our efforts 
           focus on concept, design, development and re-engineering of web businesses. We are
            working closely with software majors on new applications."
        />
      </Row>
      <Row className="mt-5">
        <About2 />
      </Row>
    </Container>
  );
}

export default Aboutcall;
