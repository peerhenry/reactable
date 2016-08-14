import React from "react";
import * as TableSizeActions from "../../../js/actions/TableSizeActions.js";
import TableStore from "../../../js/stores/TableStore.js";
import ButtonGroup from "../ButtonGroup.jsx";

export default class ButtonRow extends React.Component{

  constructor(){
    super();
    this.state = {
      colspan: TableStore.getColumnCount().toString()
    }
  }

  componentWillMount(){
    TableStore.on("change", () => this.setState({
      colspan: TableStore.getColumnCount().toString()
    }));
  }

  render(){
  const { colspan } = this.state;

  return(
    <tr>
      <td class="text-center" colSpan={colspan} >
        <ButtonGroup/>
      </td>
    </tr>
   );
  }
}