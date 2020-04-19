import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
//import CardDeck from 'react-bootstrap/CardDeck';
import Card from "react-bootstrap/Card";

function CheckitCard(props) {

  var date = props.created,
  Fdate = (new Date(date)).toLocaleString();
  return (
    <Card>  
      {/* <Card.Img variant="top" src="http://placehold.it/250x150" /> */}
      <Card.Body>
        {/* <Card.Title>What to call it?</Card.Title> */}
        <Card.Text>
          <p>{Fdate}</p>
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
<<<<<<< HEAD
=======

>>>>>>> 53ea6f2364cb6356c4af4aeb4991bd2e2b601e46
