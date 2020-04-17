import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
//import CardDeck from 'react-bootstrap/CardDeck';
import Card from "react-bootstrap/Card";

function CheckitCard(props) {
  console.log(props);
  return (
    <Card>  
      {/* <Card.Img variant="top" src="http://placehold.it/250x150" /> */}
      <Card.Body>
        {/* <Card.Title>What to call it?</Card.Title> */}
        <Card.Text>
          <p>{props.created}</p>
          <p>
            <strong>Submitted by:</strong> {props.username}
          </p>
          <p>
            <strong>Comments:</strong> {props.comments}
          </p>
        </Card.Text>
        <Card.Link href={props.url} target="_blank" rel="noopener noreferrer">
          {props.url}
        </Card.Link>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <Button
              variant="outline-success"
              size="sm"
              onClick={() => props.incrementCount(props.id, "use")}
            >
              Useful
            </Button>{" "}
            <span>{props.useful}</span>
          </Col>
          <Col>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => props.incrementCount(props.id, "int")}
            >
              Interesting
            </Button>{" "}
            <span>{props.interesting}</span>
          </Col>
          <Col>
            <Button
              variant="outline-warning"
              size="sm"
              onClick={() => props.incrementCount(props.id, "unu")}
            >
              Unusual
            </Button>{" "}
            <span>{props.unusual}</span>
          </Col>{" "}
        </Row>
      </Card.Footer>{" "}
    </Card>
  );
}

export default CheckitCard;

