import React from "react";
import Options from "./Options.jsx";
import SearchForm from "./SearchForm.jsx";

export default class NavBar extends React.Component{

  constructor(){
    super();
  }

  render(){
    const titleStyle = {
      "font-weight": "bold",
      "font-style": "italic",
      "font-size": "24px"
    };
    return(
      <nav class="navbar navbar-inverse navbar-fixed-top" id="navMenu">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><a href="#" style={titleStyle}>
              ReacTable
            </a></li>
            <Options/>
            <li><a href="">button2</a></li>
          </ul>
          <SearchForm/>
        </div>
      </nav>
    )
  }
}