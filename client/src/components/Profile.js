// import React, { Fragment } from "react";
// import { useAuth0 } from "../react-auth0-spa";

// const Profile = () => {
//   const { loading, user } = useAuth0();

//   if (loading || !user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Fragment>
//       <img src={user.picture} alt="Profile" />

//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//       <code>{JSON.stringify(user, null, 2)}</code>
//     </Fragment>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import axios from "axios";
//import DeleteBtn from "../components/DeleteBtn";
//import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
//import CardDeck from 'react-bootstrap/CardDeck';
import CheckitCard from "../components/CheckitCard";
import API from "../utils/API";
import { Container } from "../components/Grid";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

function Checkits() {
  // Setting our component's initial state
  const [checkits, setCheckits] = useState([])
  //const [catType, setCatType] = useState({})
  //const [formObject, setFormObject] = useState({})

  // Load all Checkit posts and store them with setCheckits
  useEffect(() => {
    loadCheckits()
  }, [])

  // Loads all Checkit posts and sets them to checkits
  function loadCheckits() {
    console.log("loadCheckits");
    API.getCheckits()
      .then(res =>
        setCheckits(res.data)
      )
      .catch(err => console.log(err));
  };

  

  const incrementCount = async (key, catType) => {
    console.log("key=", key, " type=", catType);

   const filtered =  await checkits.filter(checkit => {
        if (checkit._id === key) return checkit
       
    })

   const checkItToUpdate = filtered[0];
    console.log(checkItToUpdate);
   switch (catType) {
    case "use":
      checkItToUpdate.useful += 1; 
      checkItToUpdate.totalVotes += 1; 
      break;
    case "int":
      checkItToUpdate.interesting += 1; 
      checkItToUpdate.totalVotes += 1; 
      break;
    case "unu":
      checkItToUpdate.unusual += 1; 
      checkItToUpdate.totalVotes += 1; 
      break;
    default:
  }

  axios.put(`/api/checkit/${key}`, {
   totalVotes: checkItToUpdate.totalVotes,
   useful: checkItToUpdate.useful,
   interesting: checkItToUpdate.interesting,
   unusual: checkItToUpdate.unusual
  })
  .then(res => {
    console.log(res);
    loadCheckits();
  })
  .catch(err => console.log(err));
 
};


  return (
    <Container fluid>
      {checkits.length ? (
        <Wrapper>
          {/* <CardDeck> */}
          {checkits.map(checkit => (
            <CheckitCard key={checkit._id}
            id={checkit._id}
            incrementCount={incrementCount}
            username={checkit.username}
            created={checkit.created}
            comments={checkit.comments}
            url={checkit.url}
            useful={checkit.useful}
            interesting={checkit.interesting}
            unusual={checkit.unusual}
            >
              {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
            </CheckitCard>
          ))}
          {/* </CardDeck> */}
        </Wrapper>
      ) : (
          <h3>No Results to Display</h3>
        )}
    </Container>
  );
}

export default Checkits;


// Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };