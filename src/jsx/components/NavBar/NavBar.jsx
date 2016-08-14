import React from "react";
import Options from "./Options.jsx";

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
          <form class="navbar-form navbar-right">
            <div className="input-group">
              <input type="text" class="form-control" placeholder="search"/>
              <span className="input-group-btn">
                <a role="button" href="#/Search/" type="submit" class="btn btn-default">
                  <i class="fa fa-search fa-lg"></i>
                </a>
              </span>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}