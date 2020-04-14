  
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
// import Login from "./components/login";
// import SignUp from "./components/signup";
// import LandingPage from "./components/landingpage";

// const App = () => (
//   <>
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/signup" component={SignUp} />
//           <Route exact path="/landingpage" component={LandingPage} />
//           <Route exact path="*" component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   </>
// );

// export default App;

///////////////////

//New code brought in from step 2 of the auth0 setup. 

import React from "react";
import NavBar from "./components/Navbar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          < PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;