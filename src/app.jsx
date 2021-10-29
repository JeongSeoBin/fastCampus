import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Route path="/" component={Home} exact />{" "}
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} /> */}

        {/* dynamic routing */}
        {/* <Route path="/profile/:id" component={Profile} /> */}

        {/* switch와 not found */}
        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
