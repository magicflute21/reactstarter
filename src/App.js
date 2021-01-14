import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import painting from "./img/ole.jpg";


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!</h1>
        <img src={painting}></img>
      </div>
    );
  }
}

export default hot(module) (App);