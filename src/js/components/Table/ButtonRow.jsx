import React from "react";
import * as TableSizeActions from "../../actions/TableSizeActions.js";

import TableStore from "../../stores/TableStore.js";

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

  addRow(){
    TableSizeActions.addRow();
  }

  addColumn(){
    TableSizeActions.addColumn();
  }

  removeRow(){
    TableSizeActions.removeRow();
  }

  removeColumn(){
    TableSizeActions.removeColumn();
  }

  render(){
  const { colspan } = this.state;

  return(
    <tr>
      <td class="text-center" colSpan={colspan} >
        <div class="btn-group">
          <button type="button" class="btn btn-default" onClick={this.addRow.bind(this)}>Add row</button>
          <button type="button" class="btn btn-default" onClick={this.addColumn.bind(this)}>Add column</button>
          <button type="button" class="btn btn-default" onClick={this.removeRow.bind(this)}>Remove row</button>
          <button type="button" class="btn btn-default" onClick={this.removeColumn.bind(this)}>Remove column</button>
        </div>
      </td>
    </tr>
   );
  }
}