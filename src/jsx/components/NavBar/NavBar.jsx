import React from "react";
import Options from "./Options.jsx";
import SearchForm from "./SearchForm.jsx";

export default class NavBar extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <ul class="nav navbar-nav">
            <Options/>
            <li><a href="">button2</a></li>
          </ul>
          <SearchForm/>
        </div>
      </nav>
    )
  }
}