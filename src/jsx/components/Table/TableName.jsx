import React from "react";
import { noInputBorder } from "../../../js/stores/StyleStore.js";
import * as TableContentActions from "../../../js/actions/TableContentActions.js";

export default class TableName extends React.Component{

  constructor(){
    super();
    this.text = "my table";
  }

  handleChange(event){
    this.text = event.target.value;
    console.log("table name changin");
    TableContentActions.editTableName(event.target.value);
  }

  render(){
    return(
      <input style={noInputBorder} defaultValue={this.text} class="h2" type="text" onChange={this.handleChange.bind(this)}/>
    )
  }
}