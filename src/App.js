import React, { Component } from "react";
import { useRoutes } from "react-router-dom";
/*-----pages-----*/
import { Home3 } from "./Home3";
import { PersonalBlog } from "./component/Personalblog";
import { NotFound } from "./404";
import {default as Router} from "./routes";

class App extends Component {
  // render() {
  //   return (
  //     <React.Fragment>
  //       <Router>
  //         <Switch>
  //           <Route exact path="/" component={Home3}/>
  //           <Route exact path="/personal_webpage" component={Home3} />
  //           <Route exact path="/blog" component={PersonalBlog} />
  //           <Route component={NotFound} />
  //         </Switch>
  //       </Router>
  //     </React.Fragment>
  //   );
  // }
  render() {
    return (
      <React.Fragment>
        <Router/>
      </React.Fragment>
    );
  }
}

export default App;

