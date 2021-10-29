import React, { Component} from "react";
import '/dist/style/tailwind/tailwindBuild.css';
import {hot} from "react-hot-loader";

const App = () => {
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  )
}

export default hot(module) (App);