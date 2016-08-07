import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class TableStore extends EventEmitter{

  constructor(){
    super();
    this.setMaxListeners(Infinity);
    this.name = "my table";
    this.header = ["col 1", "col 2", "col 3"]
    this.matrix = [
      ["cell", "cell", "cell"],
      ["cell", "cell", "cell"],
      ["cell", "cell", "cell"],
      ["cell", "cell", "cell"]
    ];
  }

  // action handling
  handleAction(action){
    switch(action.type){
      case "ADD_ROW":
        this.addRow();
        break;
      case "ADD_COLUMN":
        this.addColumn();
        break;
      case "REMOVE_ROW":
        this.removeRow();
        break;
      case "REMOVE_COLUMN":
        this.removeColumn();
        break;
      case "EDIT_CELL":
        this.editCell(action.row, action.col, action.val);
        break;
      case "EDIT_NAME":
        this.editName(action.val);
        break;
      default:
    }
  }

  // data retrieval

  getRowCount(){
    return this.matrix.length;
  }

  getColumnCount(){
    return this.header.length;
  }

  getHeader(){
    return this.header;
  }

  getMatrix(){
    return this.matrix;
  }

  getValue(row, col){
    if(row<0){
      console.log('row is < 0');
      return this.header[col];
    }
    else return this.matrix[row][col];
  }

  getName(){
    return this.name;
  }

  // data manipulation

  addColumn(){
    var cc = this.getColumnCount() + 1;
    this.header.push("col " + cc);
    this.matrix.map(row => {
      row.push("cell");
    });
    this.emit("change");
  }

  addRow(){
    var newRow = [];
    this.header.map(cell => {
      newRow.push("cell");
    });
    this.matrix.push(newRow);
    this.emit("change");
  }

  removeColumn(){
    this.header.pop();
    this.matrix.map(row => row.pop());
    this.emit("change");
  }

  removeRow(){
    this.matrix.pop();
    this.emit("change");
  }

  editCell(row, col, val){
    if(row<0) this.header[col] = val;
    else this.matrix[row][col] = val;
    this.emit("change");
  }

  editName(name){
    this.name = name;
    console.log("editName called in store: " + name);
  }
}

const tableStore = new TableStore;
dispatcher.register(tableStore.handleAction.bind(tableStore));
window.dispatcher = dispatcher;
export default tableStore;