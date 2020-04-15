import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Route, Switch } from "react-router-dom";
import Landingpage from "./landingpage";
import ExternalAPI from "../views/ExternalApi";
import Profile from "./Profile";
import { Button } from "react-bootstrap";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/external-api" component={ExternalAPI} />
          <Route path="*" component={Landingpage} />
        </Switch>
      )}
    </>
  );
};

export default NavBar;
