import React from "react";
import { connect } from "react-redux";

import { noInputBorder } from "stores/StyleStore.js";
import * as TableContentActions from "actions/TableContentActions.js";
//import TableStore from "stores/TableStore.js"

@connect((store) => {
  return {
    //text: store.get("tableContent").get("title")
    text: store.tableContent.title
  };
})
export default class TableName extends React.Component{
  /*constructor(){
    super();
    this.state= {
      text: TableStore.getName()
    }
  }//*/

  /*componentWillMount(){
    TableStore.on("change", () => {
      this.setState({
        text: TableStore.getName()
      });
    });
  }//*/

  selectText(event){
    event.target.select();
  }

  handleChange(event){
    //TableContentActions.editTableName(event.target.value);
  }

  handlerBlur(event){
    console.log("title handle blur called");
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
          onChange={this.handleChange.bind(this)}
          onFocus={this.selectText.bind(this)}
          onBlur={this.handlerBlur.bind(this)}
          defaultValue={this.props.text}
        />
      </div>
    )
  }

  /*render(){
    const { text } = this.state;
    return(
      <input 
        style={noInputBorder} 
        value={text} 
        class="h2" 
        type="text" 
        onChange={this.handleChange.bind(this)}
        onFocus={this.selectText.bind(this)}
      />
    )
  }//*/
}