import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {getFakeMembers , gen} from "./Components/getData";

const App = () =>{
  return(
    <div className="Body">
      <div className="all">
      <h1 className = "Main">Random Name Generator</h1>
      <div id="container">
        Generate Random Name
      </div>
      <br/><br/>
      <button id="on" onClick={() => gen()}>Generate random name </button>
    </div>
    </div>
  );
};

export default App;