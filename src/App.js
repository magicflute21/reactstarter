import React, { Component} from "react";
import '/dist/style/tailwind/tailwindBuild.css';
import { PaginationTable } from './components/PaginationTable';
import {hot} from "react-hot-loader";

class App extends Component{
  render(){
    return(
      <div className="App">
        <PaginationTable />
      </div>
    );
  }
}

export default hot(module) (App);