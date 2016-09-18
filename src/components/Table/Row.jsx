import React from "react";
import Cell from "./Cell.jsx";

export default class Row extends React.Component{
  constructor(){
    super();
  }

  render(){
  var i = 0;
  const Elements = this.props.array.map(entry => {
    var newCell = new Cell(this.props.rowNumber, i);
    return(
      <td key={i++}>
        { newCell.render() }
      </td>
    );
  })

  return(
    <tr>
      {Elements}
    </tr>
   )
  }
}