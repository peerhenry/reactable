import React from "react";

export default class NewDropdownMenu extends React.Component{
  render(){
    return(
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          New <span class="caret"></span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="#" role="button">
              New List
            </a>
          </li>
          <li>
            <a href="#" role="button">
              New Table
            </a>
          </li>
          <li>
            <a href="#" role="button">
              New Table...
            </a>
          </li>
        </ul> 
      </li>
    );
  }
}