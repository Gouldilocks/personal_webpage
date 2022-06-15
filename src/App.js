import React, { Component } from "react";
import { useRoutes } from "react-router-dom";
/*-----pages-----*/
import { Home3 } from "./Home3";
import { PersonalBlog } from "./component/Personalblog";
import { NotFound } from "./404";
import {default as Router} from "./routes";

class App extends Component {
  render() {
    return (
      // <React.Fragment>
        <Router/>
      // </React.Fragment>
    );
  }
}

export default App;

