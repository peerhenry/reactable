import React from "react";

import {panelStyle} from "stores/StyleStore.js";

import TableTitle from "./TableTitle";
import Table from "./Table";

export default class TablePanel extends React.Component{
  render(){
    return(
      <div id="table-container" style={panelStyle}>
        {(this.props.showTitle) ? (<TableTitle/>) : null }
        <Table showHeader={this.props.showHeader}/>
      </div>
    );
  }
}