import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../components/Wrapper";
//import CardDeck from 'react-bootstrap/CardDeck';
import CheckitCard from "../components/CheckitCard";
import API from "../utils/API";
import { Container } from "../components/Grid";

function Checkits() {
  // Setting our component's initial state
  const [checkits, setCheckits] = useState([]);
  
  // Load all Checkit posts and store them with setCheckits
  useEffect(() => {
    loadCheckits();
  }, []);

  // Loads all Checkit posts and sets them to checkits
  function loadCheckits() {
    console.log("loadCheckits");
    API.getCheckits()
      .then((res) => setCheckits(res.data))
      .catch((err) => console.log(err));
  }

  const incrementCount = async (key, catType) => {
    console.log("key=", key, " type=", catType);

    const filtered = await checkits.filter((checkit) => {
      if (checkit._id === key) return checkit;
    });

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

    axios
      .put(`/api/checkit/${key}`, {
        totalVotes: checkItToUpdate.totalVotes,
        useful: checkItToUpdate.useful,
        interesting: checkItToUpdate.interesting,
        unusual: checkItToUpdate.unusual,
      })
      .then((res) => {
        console.log(res);
        loadCheckits();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container fluid>
        {checkits.length ? (
          <Wrapper>
            {checkits.map((checkit) => (
              <CheckitCard
                key={checkit._id}
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
    </>
  );
}

export default Checkits;
