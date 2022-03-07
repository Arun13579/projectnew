import React from "react";
import Footer from "./Footer";
import Nextpageintro from "./Nextpageintro";
import { Container, Row, Col } from "react-bootstrap";
import { Articlesdiv1, Articlesdiv2 } from "./Articlespage";
import image1 from "./Assets/image1.jpg";
import image2 from "./Assets/image2.jpg";
import image3 from "./Assets/image3.jpg";
import image5 from "./Assets/image5.jpg";
import image6 from "./Assets/image6.jpg";
import image7 from "./Assets/image7.jpg";
import image8 from "./Assets/image8.jpg";
import image10 from "./Assets/image10.BTFTFrJRoJ";
import image11 from "./Assets/image11.j_GrG2Qqct";
import image12 from "./Assets/image12.sF2vWNBdBb";
import image13 from "./Assets/image13.PZmt_Y4PQW";
import image15 from "./Assets/image15.iux0VNzfc1";
import person1 from "./Assets/person1.jpg";
import person2 from "./Assets/person2.jpg";
import person3 from "./Assets/person3.jpg";
import person4 from "./Assets/person4.jpg";

function Articlespagecall() {
  return (
    <>
      <Nextpageintro link="/" head="Our Blog" first="Home" second="Our Blog" />
      <Container fluid>
        <Row>
          <Articlesdiv1
            img={image1}
            iconimg={person1}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image2}
            iconimg={person2}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image3}
            iconimg={person3}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image5}
            iconimg={person4}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image6}
            iconimg={person1}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image7}
            iconimg={person2}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image8}
            iconimg={person3}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image10}
            iconimg={person4}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image11}
            iconimg={person1}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image12}
            iconimg={person2}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image13}
            iconimg={person3}
            color="color"
            color2="color2"
          />
          <Articlesdiv1
            img={image15}
            iconimg={person4}
            color="color"
            color2="color2"
          />
        </Row>
        <Articlesdiv2 />
      </Container>
      <Footer />
    </>
  );
}

export default Articlespagecall;
