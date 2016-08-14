import React from "react";
import TableSaver from "../../js/api/TableSaver.js";

export default class SaveButton extends React.Component{

  constructor(){
    super();
  }

  saveTable(){
    TableSaver.saveTable();
  }

  render(){
  return(
    <button type="button" class="btn btn-success" onClick={this.saveTable.bind(this)}>Save</button>
   );
  }
}