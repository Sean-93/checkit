import React, { useState } from "react";
import "./landingpage";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";

export default function landingpage() {
  const navbarr = {
    marginBottom: "150px",
    height: "80px",
    textShadow: "3px 4px 4px #0575e6",
    boxShadow: "10px 10px 10px 10px white",
  };
  const stylelink = {
    fontSize: "20px",
  };
  const stylecard = {};
  return (
    <>
      <Navbar style={navbarr} expand="lg" variant="light" bg="white">
        <Container>
          <Nav.Link href="/" style={stylelink}>
            Logout
          </Nav.Link>
          <Navbar.Brand href="#" style={{ fontSize: "60px", color: "#00f260" }}>
            Checkit
          </Navbar.Brand>
          <Nav.Link href="/post" style={stylelink}>

            <Example />
          </Nav.Link>
        </Container>
        {/* Link to logout and post */}
      </Navbar>

      <Container>
        <Row style={{ margin: "auto" }}>
          <Col style={{ width: "33.33%" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "17.85rem", height: "10rem" }}
                variant="top"
                src="http://placehold.com/100/200"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ width: "33.33%" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "17.85rem", height: "10rem" }}
                variant="top"
                src="http://placehold.com/100/200"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ width: "33.33%" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "17.85rem", height: "10rem" }}
                variant="top"
                src="http://placehold.com/100/200"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const stylelink = {
    fontSize: "20px",
  };

  return (
    <>
      <Nav.Link onClick={handleShow} style={stylelink}>
        {" "}
        PostIt
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make a PostIt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Link:</Form.Label>
              <Form.Control type="text" placeholder="Enter a Link" />
              <br />
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                required

                as="textarea"
                rows="3"
                placeholder="Enter a Comment"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
