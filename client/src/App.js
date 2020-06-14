import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
// import styles from "./styles/";

//imported components
import SignIn from "./components/login";
import SignUp from "./components/signup";
import Community from "./components/community";

class App extends Component {
  state = {
    logo: logo,
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/community" component={Community} />
        </Switch>
      </div>
    );
  }
}

export default App;
