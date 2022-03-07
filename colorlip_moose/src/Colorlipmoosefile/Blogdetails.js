import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Stylemoose from "./Stylemoose.css";
import Nextpageintro from "./Nextpageintro";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Footer from "./Footer";
import person1 from "./Assets/person1.jpg";
import image1 from "./Assets/image1.jpg";
import { Divimage, Divtextcom } from "./Home";
import Blogreplay from "./Blogreplay";
import Contacttextbox from "./Contacttextbox";

function Blogdetails() {
  const fn = () => {
    alert("Successfully Sending Comment ...");
  };
  return (
    <>
      <Container fluid>
        <Row className="mt-5 pt-5 mb-5 pb-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className="text-center mt-5 pt-1 pb-1"
          >
            <h1 className="color2 fontsize">Our Blog</h1>
            <Row className="mt-3 color2">
              <h6>
                <span className="mx-2">
                  <Link to="/" className="anger">
                    Home <i class="fa fa-chevron-right"></i>
                  </Link>
                </span>
                <span className="mx-2">
                  <Link to="/Articlespagecall" className="anger">
                    Blog <i class="fa fa-chevron-right"></i>
                  </Link>
                </span>
                <span className="mx-2">
                  Blog details <i class="fa fa-chevron-right"></i>
                </span>
              </h6>
            </Row>
          </Col>
        </Row>
        <Row>
          <Divimage className="order-1" imgpath={image1} />
          <Divtextcom className="order-2" perimg={person1} color2="color2" />
        </Row>
        <Col
          className="mx-auto text-align-left mt-5 mb-3"
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          xxl={7}
        >
          <h5 className="pt-3 lineheit">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </h5>
          <h5 className="pt-3 lineheit">
            <b>On her way she met a copy.</b> The copy warned the Little Blind
            Text, that where it came from it would have been rewritten a
            thousand times and everything that was left from its origin would be
            the word "and" and the Little Blind Text should turn around and
            return to its own, safe country. But nothing the copy said could
            convince her and so it didn’t take long until a few insidious Copy
            Writers ambushed her, made her drunk with Longe and Parole and
            dragged her into their agency, where they abused her for their.
          </h5>
          <h2 className="pt-5 pb-1">
            <b>How It Works</b>
          </h2>
          <h5 className="pt-2 lineheit">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </h5>
          <h5 className="pt-3 lineheit">
            <b>On her way she met a copy.</b> The copy warned the Little Blind
            Text, that where it came from it would have been rewritten a
            thousand times and everything that was left from its origin would be
            the word "and" and the Little Blind Text should turn around and
            return to its own, safe country. But nothing the copy said could
            convince her and so it didn’t take long until a few insidious Copy
            Writers ambushed her, made her drunk with Longe and Parole and
            dragged her into their agency, where they abused her for their.
          </h5>
        </Col>
        <Col
          className="mt-5 mb-5 pt-3 pb-3 text-align-left mx-auto"
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          xxl={7}
        >
          <button className="bg-primary btn btn-outline-dark mx-2">
            <b className="color">LIFE</b>
          </button>
          <button className="bg-primary btn btn-outline-dark mx-2">
            <b className="color">SPORT</b>
          </button>
          <button className="bg-primary btn btn-outline-dark mx-2">
            <b className="color">TECH</b>
          </button>
          <button className="bg-primary btn btn-outline-dark mx-2">
            <b className="color">WORK</b>
          </button>
        </Col>
        <Col
          className="mt-5 mb-5 mx-auto text-align-left"
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          xxl={7}
        >
          <h2 className="pt-5 pb-5">
            <b>6 Comments</b>
          </h2>
          <Blogreplay />
          <Blogreplay />
          <Blogreplay />
          <Blogreplay />
          <Blogreplay />
          <Blogreplay />
        </Col>
        <Col
          className="mx-auto text-align-left pt-5 pb-5 contactboxshadow px-5 mt-5 mb-5"
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          xxl={7}
        >
          <Contacttextbox
            head="Leave a comment"
            button="Post Comment"
            fn={fn}
          />
        </Col>
      </Container>
      <Footer />
    </>
  );
}

export default Blogdetails;
