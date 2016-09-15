import React from "react";

import {loadTable} from "actions/TableContentActions.js";
import TableEditButtons from "./TableEditButtons.jsx";
import TablePanel from "./TablePanel.jsx";
import DescriptionPanel from "./DescriptionPanel.jsx";
import CommentsPanel from "./Comments/CommentsPanel.jsx";

export default class TablePage extends React.Component{

  componentDidMount(){
    loadTable('0');
  }

  render(){
    return(
      <div>
        <div class="container margin-top">
          <center class="row"><TableEditButtons/></center>
        </div>
        <div class="container margin-top">
          <div id="page-container">
            <TablePanel/>
            <DescriptionPanel/>
            <CommentsPanel/>
          </div>
        </div>
      </div>
    )
  }
}