import React, { Component } from "react";
/*-----pages-----*/
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

