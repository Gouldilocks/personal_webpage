import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { Home3 } from "./Home3";
import { PersonalBlog } from "./component/Personalblog";
import { NotFound } from "./404";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home3} />
            <Route exact path="/personal_webpage" component={Home3} />
            <Route exact path="/blog" component={PersonalBlog} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
