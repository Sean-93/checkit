import React from "react";
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signup";
import LandingPage from "./components/landingpage";
import Post from "./components/post";

const App = () => (
  <>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </div>
    </Router>
  </>
);
>>>>>>> 57f415b2b01db744caf63f13c59d202a3a8be26e

