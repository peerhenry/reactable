import React from "react";

export default class NavBar extends React.Component{
  render(){
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Options <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Show header</a>
              </li>
              <li>
                <a href="#">Show title</a>
              </li>
            </ul>
          </li>
          <li><a href="">button2</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <div className="form-group">
            <input type="text" class="form-control" placeholder="search"/>
            <button type="submit" class="btn btn-default">
              <i class="fa fa-search fa-lg"></i>
            </button>
          </div>
        </form>
      </div>
    </nav>
   )
  }
}