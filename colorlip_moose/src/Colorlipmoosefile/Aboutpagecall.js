import React from "react";
import Footer from "./Footer";
import Nextpageintro from "./Nextpageintro";
import { Container, Row, Col } from "react-bootstrap";
import { Aboutdiv1 } from "./Aboutpage";

function Aboutpagecall() {
  return (
    <div>
      <Nextpageintro link="/" head="About" first="Home" second="About" />
      <Aboutdiv1 />
      <Footer />
    </div>
  );
}

export default Aboutpagecall;
