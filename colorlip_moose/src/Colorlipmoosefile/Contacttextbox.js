import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Stylemoose from "./Stylemoose.css";

function Contacttextbox({ head, button, fn }) {
  return (
    <>
      <h2>{head}</h2>
      <Form className="mt-3 mb-3">
        <fieldset>
          <Row>
            <Form.Group className="mb-3 col-6">
              <Form.Label htmlFor="disabledTextInput">
                <h6>FULL NAME</h6>
              </Form.Label>
              <Form.Control id="disabledTextInput" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3 col-6">
              <Form.Label htmlFor="disabledTextInput">
                <h6>EMAIL ADDRESS</h6>
              </Form.Label>
              <Form.Control id="disabledTextInput" placeholder="Email" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">
              <h6>SUBJECT</h6>
            </Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">
              <h6>MESSAGE</h6>
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              id="disabledTextInput"
              placeholder="Message"
            />
          </Form.Group>

          <Button type="submit" onClick={fn}>
            {button}
          </Button>
        </fieldset>
      </Form>
    </>
  );
}

export default Contacttextbox;
