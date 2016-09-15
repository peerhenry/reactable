import React from "react";
import { noInputBorder } from "stores/StyleStore.js";
import { hidden } from "stores/StyleStore.js";
import * as TableContentActions from "actions/TableContentActions.js";
import TableStore from "stores/TableStore.js"
import PageStore from "stores/PageStore.js"

export default class TableName extends React.Component{

  constructor(){
    super();
    this.state= {
      text: TableStore.getName(),
      isVisble: PageStore.titleIsVisible()
    }
  }

  componentWillMount(){
    TableStore.on("change", () => {
      this.setState({
        text: TableStore.getName()
      });
    });
    PageStore.on("change", () => {
      this.setState({
        isVisble: PageStore.titleIsVisible()
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
    var inlineStyle = (this.state.isVisble) ? noInputBorder : hidden;  
    const { text } = this.state;
    return(
      <input 
        style={inlineStyle} 
        value={text} 
        class="h2" 
        type="text" 
        onChange={this.handleChange.bind(this)}
        onFocus={this.selectText.bind(this)}
      />
    )
  }
}