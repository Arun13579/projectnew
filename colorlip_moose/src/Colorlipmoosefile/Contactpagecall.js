import React from "react";
import Footer from "./Footer";
import Nextpageintro from "./Nextpageintro";
import { Contactdiv1, Contactdiv2 } from "./Contactpage";
import { Container, Row, Col } from "react-bootstrap";
function Contactpagecall() {
  return (
    <>
      <Nextpageintro link="/" head="Contact" first="Home" second="Contact" />
      <Container>
        <Row>
          <Contactdiv1
            head="Address:"
            text="198 West 21th Street, Suite 721 New York NY
                10016"
            icon="fa fa-map-marker fa-2x pt-3 contacticon"
          />
          <Contactdiv1
            head="Phone: "
            text=" + 1235 2355 98 "
            icon="fa fa-phone fa-2x pt-3 contacticon"
          />
          <Contactdiv1
            head="Email:"
            text="info@yoursite.com "
            icon="fa fa-paper-plane fa-2x pt-3 contacticon"
          />
          <Contactdiv1
            head="Website:"
            text="yoursite.com"
            icon="fa fa-globe fa-2x pt-3 contacticon"
          />
        </Row>
      </Container>
      <Contactdiv2 />
      <Footer />
    </>
  );
}

export default Contactpagecall;
