import React from "react";

import {panelStyle} from "stores/StyleStore.js";
import TablePageDisplayStore from "stores/TablePageDisplayStore.js"

import TableName from "./TableName";
import Table from "./Table";

export default class TablePanel extends React.Component{
  constructor(){
    super();
    this.state = {
      showTitle: TablePageDisplayStore.titleIsVisible()
    }
  }

  componentWillMount(){
    TablePageDisplayStore.on("change", () => {
      this.setState({
        showTitle: TablePageDisplayStore.titleIsVisible()
      });
    });
  }

  render(){
    return(
      <div id="table-container" style={panelStyle}>
        {(this.state.showTitle) ? (<TableName/>) : null }
        <Table/>
      </div>
    );
  }
}