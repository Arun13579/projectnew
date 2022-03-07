import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Vebboxstyle from "./Vebboxstyle.css";
import team from "./Assets/team.jpg";

function Team() {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col>
          <Card style={{ width: "18rem" }} className="mx-auto">
            <Card.Img variant="top" src={team} />
            <Card.Body>
              <Card.Title className="text-center">Vignesh V</Card.Title>
              <Card.Text className="text-center">
                Chief Executive Officer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
