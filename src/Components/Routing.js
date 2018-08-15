import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contacts/Contact';
import PageNotFound from './PageNotFound/PageNotFound';

class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}


export default Routing;