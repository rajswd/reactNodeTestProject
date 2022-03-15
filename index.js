import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,  Route, Switch, NavLink } from "react-router-dom";

import "./styles.css";
import HomeComponent from "./components/Home.js";
import ErrorComponent from "./components/Error.js";
import AddDataComponent from "./components/AddData.js";

const appRouting = (
  <HashRouter>
      <ul className="toolbar">
        <li>  
          <NavLink to="/home" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/add" exact activeStyle={  
             {color:'red'}  
          }>Add Data</NavLink>  
        </li>
      </ul> 
      <Switch>
      <Route exact path="/" component={HomeComponent} />  
      <Route exact path="/home" component={HomeComponent} /> 
      <Route exact path="/add" component={AddDataComponent} /> 
      <Route component={ErrorComponent} /> 
    </Switch>
  </HashRouter>
);

ReactDOM.render(appRouting, document.getElementById("root"));