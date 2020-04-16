import React from "react";
import "./style.css";

import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
//import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


function CheckitCard(props) {
  console.log(props);
  return (
    <Card style={{ width: "20rem" }}>
      {/* <Card.Img variant="top" src="http://placehold.it/250x150" /> */}
      <Card.Body>
        {/* <Card.Title>What to call it?</Card.Title> */}
        <Card.Text>
          <p>
            <strong>Submitted by:</strong> {props.username}
          </p>
          <p>
            <strong>Comments:</strong> {props.comments}
          </p>
          </Card.Text>
          <Card.Link href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</Card.Link>
          <Card.Text>
          <p>{" "}</p>
          <p>
          <Button variant="outline-info" size="sm" onClick={() => props.incrementCount(props.id, "use")}>
            Useful
          </Button>{" "}<span>{props.useful}</span>
          </p>
          <p>
          <Button variant="outline-info" size="sm" onClick={() => props.incrementCount(props.id, "int")}>
            Interesting
          </Button>{" "}<span>{props.interesting}</span>
          </p>
          <p>
          <Button variant="outline-info" size="sm" onClick={() => props.incrementCount(props.id, "unu")}>
            Unusual
          </Button>{" "}<span>{props.unusual}</span>
          </p>
         </Card.Text> 
        {/* <a href={props.url} target="_blank" class="btn btn-outline-dark">Try It</a> */}
      </Card.Body>
    </Card>

  );
}

export default CheckitCard;


{/* <span onClick={() => props.removeFriend(props.id)} className="remove">
𝘅
</span> */}

// <div className="card">
//       {/* <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div> */}
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Submitted by:</strong> {props.username}
//           </li>
//           <li>
//             <strong>Comments:</strong> {props.comments}
//           </li>
//           <li>
//             {/* <strong>Url:</strong> {props.url} */}
//             <a href={props.url} target="_blank" class="btn btn-outline-dark">Try It</a>
//           </li>
//           <li>
//             <strong>Useful:</strong> {props.useful}
//           </li>
//           <li>
//             <strong>Interesting:</strong> {props.interesting}
//           </li>
//           <li>
//             <strong>Unusual:</strong> {props.unusual}
//           </li>
//         </ul>
//       </div>

// {/* <ul>
//   <li>
//     <strong>Useful:</strong> {props.useful}
//   </li>
//   <li>
//     <strong>Interesting:</strong> {props.interesting}
//   </li>
//   <li>
//     <strong>Unusual:</strong> {props.unusual}
//   </li>
// </ul> */}