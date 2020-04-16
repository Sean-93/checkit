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
//import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
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

  

  const incrementCount = (key, catType) => {
    console.log("key=", key, " type=", catType);
  //  console.log("click");
  // Read record using mongo key
  // Increment corresponding category [useful, interesting, unusual]
  // and increment total votes.
  // Update record read previously
  API.getCheckit(key, catType)
  .then(res => updateVotes(res.data, catType)
  //console.log("use=",res.data.useful, " tot=", res.data.totalVotes)
    //loadCheckits()
    //setCheckits(res.data)
  )
  .catch(err => console.log(err));
  };

  function updateVotes(resData, catType) {
    resData.totalVotes += 1;
    console.log(resData._id, catType, resData.totalVotes);
    
    switch (catType) {
        case "use":
          resData.useful += 1; 
          break;
        case "int":
          resData.interesting += 1; 
          break;
        case "unu":
          resData.unusual += 1; 
          break;
        default:
      }

    API.updateCheckit(resData._id, resData)
     .then(res => loadCheckits()
     )
     .catch(err => console.log(err));
  };


  return (
    <Container fluid>
      {checkits.length ? (
        <Wrapper>
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