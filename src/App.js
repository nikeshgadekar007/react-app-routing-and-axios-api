import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import * as firebase from "firebase";
import axios from "axios";
import Banner from "./images/banner.jpg";
import NavBar from "./Components/NavBar/NavBar";
import Routing from "./Components/Routing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routing />
      </div>
    );
  }
}

export default App;
