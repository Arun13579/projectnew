import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Stylemoose from "./Stylemoose.css";

//Homepage
import { Divimage, Divtextcom, Viewbutton, Pagehome } from "./Home";
import image1 from "./Assets/image1.jpg";
import image2 from "./Assets/image2.jpg";
import image3 from "./Assets/image3.jpg";
import image5 from "./Assets/image5.jpg";
import image6 from "./Assets/image6.jpg";
import image7 from "./Assets/image7.jpg";
import image8 from "./Assets/image8.jpg";
import person1 from "./Assets/person1.jpg";
import person2 from "./Assets/person2.jpg";
import person3 from "./Assets/person3.jpg";
import person4 from "./Assets/person4.jpg";
import Footer from "./Footer";
//About
import Aboutpagecall from "./Aboutpagecall";
//Articles
import Articlespagecall from "./Articlespagecall";
import Blogdetails from "./Blogdetails";
//Contact
import Contactpagecall from "./Contactpagecall";

export function Navweb(props) {
  return (
    <>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand
              href="#"
              className="mt-2 col-1 offset-lg-2 offset-xl-2 offset-xxl-2"
            >
              <h4 className="">MOOSE</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mb-1 col-6 offset-lg-4 offset-xl-4 offset-xxl-4">
                <Col className="" lg={2} xl={2} xll={2}>
                  <Link to="/" className="anger color">
                    <h6 className="mt-3 mx-lg-1">Home</h6>
                  </Link>
                </Col>
                <Col className="" lg={2} xl={2} xll={2}>
                  <Link to="/Articlespagecall" className="anger color">
                    <h6 className="mt-3 mx-lg-1">Articals</h6>
                  </Link>
                </Col>
                <Col className="" lg={2} xl={2} xll={2}>
                  <Link to="/Aboutpagecall" className="anger color">
                    <h6 className="mt-3 mx-lg-2">About</h6>
                  </Link>
                </Col>
                <Col className="" lg={2} xl={2} xll={2}>
                  <Link to="/Contactpagecall" className="anger color">
                    <h6 className="mt-3 mx-lg-1">Contact</h6>
                  </Link>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Homecall />}></Route>
          <Route path="/Contactpagecall" element={<Contactpagecall />}></Route>
          <Route path="/Aboutpagecall" element={<Aboutpagecall />}></Route>
          <Route
            path="/Articlespagecall"
            element={<Articlespagecall />}
          ></Route>
          <Route path="/Blogdetails.js" element={<Blogdetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

//Homepage
export function Homecall() {
  return (
    <>
      <Container fluid>
        <Pagehome />
        <Row className="mt-5 pt-5 mx-2">
          <Divimage className="order-1" imgpath={image1} />
          <Divtextcom className="order-2" perimg={person1} color2="color2" />
          <Divtextcom
            className="order-3"
            perimg={person2}
            bgc="bg-dark"
            color="color"
          />
          <Divimage className="order-4" imgpath={image2} />
          <Divimage className="order-5" imgpath={image3} />
          <Divtextcom className="order-6" perimg={person3} color2="color2" />
          <Divtextcom
            className="order-7"
            perimg={person4}
            bgc="bg-dark"
            color="color"
          />
          <Divimage className="order-8" imgpath={image5} />
          <Divimage className="order-9" imgpath={image6} />
          <Divtextcom className="order-10" perimg={person1} color2="color2" />
          <Divtextcom
            className="order-11"
            perimg={person2}
            bgc="bg-dark"
            color="color"
          />
          <Divimage className="order-12" imgpath={image7} />
          <Divimage className="order-13" imgpath={image8} />
          <Divtextcom className="order-14" perimg={person3} color2="color2" />
        </Row>
      </Container>
      <Viewbutton />
      <Footer />
    </>
  );
}
