import React from "react";

import {loadTable} from "../../../js/actions/TableContentActions.js";
import TableName from "./TableName.jsx";
import Table from "./Table.jsx";

export default class TablePage extends React.Component{

  componentDidMount(){
    loadTable('0');
  }

  render(){
    return(
      <div class="container">
        <TableName/>
        <Table/>
      </div>
    )
  }
}