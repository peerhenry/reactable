import React from "react";
import TableStore from "../../stores/TableStore.js";
import Cell from "./Cell.jsx";

export default class TableHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      header: TableStore.getHeader()
    };
  }

  componentWillMount(){
    TableStore.on("change", () => this.setState({
      header: TableStore.getHeader()
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

    return(
      <thead>
        <tr>
          {headerElements}
        </tr>
      </thead>
    )
  }
}