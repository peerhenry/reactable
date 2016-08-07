import React from "react";

import TableName from "./Table/TableName.jsx";
import Table from "./Table/Table.jsx";

export default class Body extends React.Component{
  render(){
    return(
      <div class="container">
        <TableName/>
        <Table/>
      </div>
    )
  }
}