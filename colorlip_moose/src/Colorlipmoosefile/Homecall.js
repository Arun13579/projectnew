import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
import Stylemoose from "./Stylemoose.css";
import Footer from "./Footer";

function Homecall() {
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

export default Homecall;
