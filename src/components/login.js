import React from "react";
import { Form, Container } from "react-bootstrap";

export default function login() {
  const styleform = {
    width: "700px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgba(254, 254, 254, 0.55)",
  };
  return (
    <div className="backcolor" style={{ height: "100vh" }}>
      <Container style={styleform}>
        <Form>
          <h2>Login</h2>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
