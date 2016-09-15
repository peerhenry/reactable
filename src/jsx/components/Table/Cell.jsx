import React from "react";
import TableStore from "stores/TableStore.js";
import {noInputBorder} from "stores/StyleStore.js";
import * as TableContentActions from "actions/TableContentActions.js";

export default class Cell extends React.Component{

  constructor(row, col){
    super();
    this.state = {
      value: TableStore.getValue(row, col),
      rowN: row,
      colN: col,
      link: null,
      linked: false
    };
    // state should contain data that the component's event handler may change to trigger a UI update

    this.style = {
      border: "none",
      borderRadius: "0",
      boxShadow: "none"
    };
  }

  selectText(event){
    event.target.select();
  }

  handleChange(event){
    TableContentActions.editCell(this.state.rowN, this.state.colN, event.target.value);
  }

  render(){
    const { value } = this.state;
    return(
      <div class="input-group">
        <input
          style={noInputBorder}
          onChange={this.handleChange.bind(this)}
          onFocus={this.selectText.bind(this)}
          type="text"
          class="form-control"
          value={value}/>
        <span class="input-group-btn">
          <button class="btn btn-default add-link" data-toggle="modal" data-target="#setLinkModal">
            <i class="fa fa-link" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    );
  }
}