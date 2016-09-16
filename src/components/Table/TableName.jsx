import React from "react";
import { noInputBorder } from "stores/StyleStore.js";
import * as TableContentActions from "actions/TableContentActions.js";
import TableStore from "stores/TableStore.js"

export default class TableName extends React.Component{

  constructor(){
    super();
    this.state= {
      text: TableStore.getName()
    }
  }

  componentWillMount(){
    TableStore.on("change", () => {
      this.setState({
        text: TableStore.getName()
      });
    });
  }

  selectText(event){
    event.target.select();
  }

  handleChange(event){
    TableContentActions.editTableName(event.target.value);
  }

  render(){
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
  }
}