import React, { Component } from "react";
import Todostyle from './Todostyle.css';

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  ButtonGroup,
  Button,
} from "react-bootstrap";
var a;
var b = [];
var op;


export class Todofirst extends Component {
  constructor(props) {
    super(props);

    this.state = {
      t1: "",
    };
    this.fn = this.fn.bind(this);
    this.fnt1 = this.fnt1.bind(this);
  }

  fnt1(e) {
    a = e.target.value;
  }

  fn(e) {
    b.push(a);

    this.setState({
      t1: (op = b.map((nn) => (
        <div className="mt-2 mb-3">
          <Row className="col-12 col-sm-11 col-md-10 col-lg-10 col-xl-10 col-xxl-10 intextheit mx-auto">
            <Col
              className="optext py-1"
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xxl={10}
            >
              {nn}
            </Col>
            <Col
              className="m-0 p-0 text-end"
              xs={2}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              xll={2}
            >
              <ButtonGroup aria-label="Basic example" className="mb-1">
                <Button variant="" className="butcolor1 btn-outline-success">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </Button>
                <Button
                  variant=""
                  className="butcolor2 btn-outline-danger"
                  id="0"
                  onClick={}
                >
                  <b>X</b>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </div>
      ))),
    });
  }

 

  render() {
    return (
      <div>
        <Col
          className="fullheit mx-auto mt-4"
          xs={12}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          xll={6}
        >
          <Col className="text-center mt-2">
            <h1 className="color">TODO LIST</h1>
          </Col>
          <Col className="text-center">
            <Col className="bg-warning btn col-11">
              <InputGroup className="pt-2">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Enter the Task"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.fnt1}
                  id="addtextbox"
                />
              </InputGroup>
              <button
                className="btn bg-primary btn-outline-info col-12 mt-2 mb-2"
                onClick={this.fn}
              >
                <b className="addbut"> Add New Task</b>
              </button>
            </Col>
          </Col>

          <Col
            className="mt-2 mx-auto text-center"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xll={6}
          >
            <button className="btn btn-outline-info mx-2 bg-danger mt-2">
              <b>ALL</b>
            </button>
            <button className="btn btn-outline-info mx-2 bg-success mt-2">
              <b>Completed</b>
            </button>
          </Col>

          <Col className="mt-4">
            <Col className="">{this.state.t1}</Col>
          </Col>
        </Col>
      </div>
    );
  }
}

export default Todofirst;
