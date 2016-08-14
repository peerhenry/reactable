import React from "react";
import TableStore from "../../js/stores/TableStore.js";
import TableSaver from "../../js/api/TableSaver.js";
import * as TableContentActions from "../../js/actions/TableContentActions.js";

export default class SaveButton extends React.Component{

  constructor(){
    super();
  }

  saveTable(){
    var tableModel = TableStore.getTableModel();
    TableSaver.saveTable(tableModel, function(model){
      TableContentActions.setTable(model);
    });
  }

  render(){
    return(
      <button type="button" class="btn btn-success" onClick={this.saveTable.bind(this)}>Save</button>
    );
  }
}