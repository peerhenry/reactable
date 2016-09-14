import React from "react";

import {panelStyle} from "../../../js/stores/StyleStore.js";
import TableName from "./TableName.jsx";
import Table from "./Table.jsx";

export default class TablePanel extends React.Component{
  render(){
    return(
      <div id="table-container" style={panelStyle}>
        <TableName/>
        <Table/>
      </div>
    );
  }
}