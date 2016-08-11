import React from "react";

import TableName from "./TableName.jsx";
import Table from "./Table.jsx";

export default class TablePage extends React.Component{
  render(){
    return(
      <div class="container">
        <TableName/>
        <Table/>
      </div>
    )
  }
}