import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Post from "./post";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const navbarr = {
    marginBottom: "60px",
    height: "80px",
    textShadow: "3px 4px 4px #0575e6",
    boxShadow: "10px 10px 10px 10px white",
  };
  const stylelink = {
    fontSize: "20px",
  };
  const styleform = {
    marginTop: "100px",
    LineHeight: "5px",
    width: "50%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgba(254, 254, 254, 0.55)",
    textAlign: "center",
  };

  return (
    <>
      {!isAuthenticated && (
        <>
          <Container style={styleform}>
            <h2 style={{ color: "white", textShadow: "4px 3px 3px black" }}>
              What's CheckIt?
            </h2>
            <hr />
            <p>
              CheckIt is app that you are allowed to post any link that you
              desire and see where it takes you. It is all fun and just makes
              you surf new things on the web. The links are rated in three
              different catergories:{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>USEFUL</span>
              ,{" "}
              <span style={{ color: "dodgerBlue", fontWeight: "bold" }}>
                INTERESTING
              </span>
              , and{" "}
              <span style={{ color: "yellow", fontWeight: "bold" }}>
                UNUSUAL
              </span>
              . Come check it out!
            </p>
            <Row>
              <Col>
                <Button
                  variant="outline-primary"
                  onClick={() => loginWithRedirect({})}
                  size="lg"
                  block
                >
                  Login
                </Button>
              </Col>

              <Col>
                <Button
                  variant="outline-primary"
                  onClick={() => loginWithRedirect({})}
                  size="lg"
                  block
                >
                  Signup
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
      <Navbar style={navbarr} expand="lg" variant="light" bg="white">
        <Container>
          <>
            {isAuthenticated && (
              <>
                <Link onClick={() => logout()} style={stylelink}>
                  Log out
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <Link
                  to="/profile"
                  style={{ fontSize: "60px", color: "#00f260" }}
                >
                  CheckIt
                </Link>
                <Link component={Post}>PostIt</Link>
                <Link to="/external-api" />
              </>
            )}
          </>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
