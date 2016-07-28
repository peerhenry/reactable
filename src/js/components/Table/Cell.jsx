import React from "react";
import TableStore from "../../stores/TableStore.js";
import { noInputBorder } from "../../stores/StyleStore.js";
import * as TableContentActions from "../../actions/TableContentActions.js";

export default class Cell extends React.Component{

  constructor(row, col){
    super();
    this.state = {
      value: TableStore.getValue(row, col),
      rowN: row,
      colN: col
    };
    // state should contain data that the component's event handler may change to trigger a UI update

    this.style = {
      border: "none",
      borderRadius: "0",
      boxShadow: "none"
    };
  }

  handleChange(event){
    // this will fire an action to change the store
    TableContentActions.editCell(this.state.rowN, this.state.colN, event.target.value);
  }

  render(){
    const { value } = this.state;

    return(
      <input style={noInputBorder} onChange={this.handleChange.bind(this)} type="text" class="form-control" value={value}/>
    );
  }
}