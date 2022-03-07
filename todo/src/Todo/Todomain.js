import React, { Component } from "react";
import Todostyle from "./Todostyle.css";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  ButtonGroup,
  Button,
} from "react-bootstrap";
var listdata = [];
var deell = [];
var s = [];
var z = [];

export class Todomain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: "",
    };
  }
  onchanger = (e) => {
    this.setState({
      text1: e.target.value,
    });
  };
  onclicker = (e) => {
    listdata.push(this.state.text1);
     this.setState({   
      text1: "",     
});
  };

  delfn = (e) => {
    const { id } = e.target;
    listdata.splice(id, 1);
    this.setState({
      text1: "",
    });
  };

   
  render() {
    return (
      <div>
        <Col
          className="fullheit mx-auto mt-3"
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
          <Col className="text-center mb-4">
            <Col className="bg-warning btn col-11">
              <InputGroup className="pt-2">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Enter the Task"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.onchanger}
                  value={this.state.text1}
                />
              </InputGroup>
              <button
                className="btn bg-primary btn-outline-info col-12 mt-2 mb-2"
                onClick={this.onclicker}
                id="condi"
              >
                <b className="addbut"> Add New Task</b>
              </button>
            </Col>
          </Col>

          {/* <Col
            className="mt-2 mx-auto text-center"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xll={6}
          >
            <button className="btn btn-outline-info mx-2 bg-danger mt-2 mb-4">
              <b>ALL</b>
            </button>
            <button className="btn btn-outline-info mx-2 bg-success mt-2 mb-4">
              <b>Completed</b>
            </button>
          </Col> */}

          {listdata.map((output, index) => {
            return (
              <Col className="mt-1" key={index} id={index}>
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
                      {output}
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
                        <Button
                          variant=""
                          className="butcolor1 btn-outline-success"
                        >
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </Button>
                        <Button
                          variant=""
                          key={index}
                          id={index}
                          className="butcolor2 btn-outline-danger"
                          onClick={this.delfn}
                        >
                          <b>X</b>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Col>
      </div>
    );
  }
}

export default Todomain;
