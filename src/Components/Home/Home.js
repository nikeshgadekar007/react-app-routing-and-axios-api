import React, { Component } from "react";
import "./Home.css";
import Banner from "../../images/banner.jpg";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {

    axios
      .get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => {
        console.log("success", response.data);
        let users = response.data;


        let value = users.map((data, i)=>{
          return data.title;
        });

        this.setState({
          user: users[0],
          value:value
        });
      })
      .catch(err => {
        console.log("eroor");
      });
  }

  render() {

    return (
      <div className="container-fluid">
        <img src={Banner} alt={Banner} className="banner" />
        <div className="text-block">
        <div className="col-lg-6"><h6 className="underline">Welcome To E-Banking</h6></div>
        <div className="col-lg-6"><h3>Safe,secure and convenient banking</h3></div>
        <div className="col-lg-6">
          <p>{this.state.user.body}</p>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-3">
           <span>{this.state.value}</span>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
