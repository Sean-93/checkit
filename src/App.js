import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./login";
import SignUp from "./signup";
import LandingPage from "./landingpage";
import Post from "./post";

const Main = () => (
  <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/landingpage" component={LandingPage} />
        <Route exact path="/post" component={Post} />
    </Switch>
)

export default Main;

