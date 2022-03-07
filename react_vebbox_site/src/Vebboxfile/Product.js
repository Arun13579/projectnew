import React from "react";
import Vebboxstyle from "./Vebboxstyle.css";
import { Col } from "react-bootstrap";
import pro1 from "./Assets/pro1.jpg";

function Product(props) {
  return (
    <Col className="mt-3" xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
      <div className="productheit productimg pt-5 btn">
        <div className="pt-4">
          <Col
            className="text-center mt-5 pt-2 mx-auto prodivheit"
            xs={11}
            sm={11}
            md={11}
            lg={11}
            xl={11}
            xxl={11}
          >
            <h3>{props.head}</h3>
            <p> {props.text}</p>
          </Col>
        </div>
      </div>
    </Col>
  );
}

export default Product;
