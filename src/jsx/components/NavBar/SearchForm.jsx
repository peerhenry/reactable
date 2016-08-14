import React from "react";

export default class SearchForm extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
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
    )
  }
}