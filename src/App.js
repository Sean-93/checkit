import React from "react";
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
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
