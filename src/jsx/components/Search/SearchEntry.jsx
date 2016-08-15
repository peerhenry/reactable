import React from "react";
import Stars from "./Stars.jsx";
import { open } from "../../../js/actions/SearchActions.js";

export default class SearchEntry extends React.Component{

  constructor(){
    super();
  }

  handleClick(e){
    console.log('handling search entry click...');
    window.location = '#/?uid='+this.props.uid;
  }

  render(){
    const clickableStyle = {
      "cursor": "pointer"
    };
    return(
      <tr 
        class="clickable-row"
        style={clickableStyle}
        onClick={this.handleClick.bind(this)}
      >
        <td>{this.props.name}</td>
        <td>{this.props.creator}</td>
        <td>{this.props.lastModified}</td>
        <td>
          <Stars rating={this.props.rating}/>
        </td>
      </tr>
    );
  }

}