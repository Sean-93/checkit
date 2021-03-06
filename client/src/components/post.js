import React, { useState } from "react";
import "./landingpage";
import { Nav, Button, Modal, Form } from "react-bootstrap";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";


function Post() {
  const [show, setShow] = useState(false);
  const [formObject, setFormObject] = useState({});
  const [redirect, setRedirect] = useState("");
  
  const { user } = useAuth0();
  
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    console.log("Post handleFormSubmit user", user);
    if (formObject.url && formObject.comment) {
      console.log("user", user.nickname)
      API.saveCheckit({
        username: user.name,
        email: user.email,
        url: formObject.url,
        comments: formObject.comment,
      })
        .then((res) => console.log("hello"))
        .catch((err) => console.log(err));
    }
  }

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
              <Form.Control
                required
                onChange={handleInputChange}
                value={formObject.url}
                name="url"
                type="text"
                placeholder="Enter a Link"
              />
              <br />
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                required
                onChange={handleInputChange}
                value={formObject.comment}
                as="textarea"
                name="comment"
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
          <Button
            variant="primary"
            onClick={() => {
              handleFormSubmit();
              handleClose();
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post;
