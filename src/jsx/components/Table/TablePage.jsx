import React from "react";

import {loadTable} from "../../../js/actions/TableContentActions.js";
import ButtonGroup from "./ButtonGroup.jsx";
import TablePanel from "./TablePanel.jsx";
import DescriptionPanel from "./DescriptionPanel.jsx";
import CommentsPanel from "./CommentsPanel.jsx";

export default class TablePage extends React.Component{

  componentDidMount(){
    loadTable('0');
  }

  render(){
    return(
      <div>
        <div class="container margin-top">
          <center class="row"><ButtonGroup/></center>
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