import React from "react";
import TableStore from "../../stores/TableStore.js"
import Row from "./Row.jsx";
import ButtonRow from "./ButtonRow.jsx";

export default class TableBody extends React.Component{
  constructor()  {
    super();
    this.state = {
      matrix: TableStore.getMatrix()
    };
  }

  componentWillMount(){
    TableStore.on("change", () => {
      this.setState({
        matrix: TableStore.getMatrix()
      });
    });
  }

  render(){
    const { matrix } = this.state;

    var i = 0;
    var Rows = matrix.map(row => {
      return(<Row rowNumber={i} key={i++} array={row}/>);
    });

    return(
      <tbody>
        {Rows}
        <ButtonRow/>
      </tbody>
    )
  }
}