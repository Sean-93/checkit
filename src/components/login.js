import React from "react";
import { Form, Container, Button } from "react-bootstrap";

export default function login() {
  const styleform = {
    marginTop: "100px",
    width: "70%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgba(254, 254, 254, 0.55)",
  };
  return (
    <>
      <Container style={styleform}>
        <h2>Login</h2>
        <hr />
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br />
          <Button variant="outline-primary">Sumbit Login</Button>{" "}
        </Form>
      </Container>
    </>
  );
}
