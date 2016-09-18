import React from "react";
import { connect } from "react-redux";

import { noInputBorder } from "stores/StyleStore.js";
import * as TableContentActions from "actions/TableContentActions.js";

@connect((store) => {
  return {
    text: store.tableContent.title
  };
})
export default class TableTitle extends React.Component{
  selectText(event){
    event.target.select();
  }

  handlerBlur(event){
    this.props.dispatch({
      type: "EDIT_TITLE",
      payload: {
        text: event.target.value
      }
    });
  }

  render(){
    return(
      <div>
        <input 
          style={noInputBorder}
          class="h2" 
          type="text" 
          onFocus={this.selectText.bind(this)}
          onBlur={this.handlerBlur.bind(this)}
          defaultValue={this.props.text}
        />
      </div>
    )
  }
}