
import React from "react";
import NavBar from "./components/Navbar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./views/ExternalApi";



function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          {/* <Route exact path="/profile" component={Profile} /> */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />

        </Switch>
<<<<<<< HEAD:src/App.js
    </Router>
      </div>
  
);
  }
=======
      </Router>
    </div>
  );
}

>>>>>>> 05b59a172b4fffa9addc2a62016abc672a5e0a65:client/src/App.js
export default App;
