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
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

function Checkits() {
  // Setting our component's initial state
  const [checkits, setCheckits] = useState([])
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

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Posts</h1>
            </Jumbotron>
            {checkits.length ? (
              <List>
                {checkits.map(checkit => (
                  <ListItem key={checkit._id}>
                    {checkit.comments}
                    {checkit.username}
                    {checkit.created}
                    {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Checkits;
