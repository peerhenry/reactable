import React from "react";
import TableStore from "stores/TableStore.js";
import TablePageDisplayStore from "stores/TablePageDisplayStore.js";
import Cell from "./Cell.jsx";
import { noInputBorder, hidden } from "stores/StyleStore.js";

export default class TableHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      header: TableStore.getHeader(),
      isVisble: TablePageDisplayStore.headerIsVisible()
    };
  }

  componentWillMount(){
    TableStore.on("change", () => this.setState({
      header: TableStore.getHeader()
    }));
    TablePageDisplayStore.on("change", () => this.setState({
      isVisble: TablePageDisplayStore.headerIsVisible()
    }));
  }

  render(){
    const { header } = this.state;

    var i = 0;
    const headerElements = header.map(el => {
      var cell = new Cell(-1, i);
      return (
        <th key={i++}>
          {cell.render()}
        </th>);
    });

    var inlineStyle = (this.state.isVisble) ? noInputBorder : hidden;

    return(
      <thead style={inlineStyle}>
        <tr>
          {headerElements}
        </tr>
      </thead>
    )
  }
}