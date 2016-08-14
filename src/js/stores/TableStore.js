import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"
import tableRetriever from "../api/tableretriever.js";

class TableStore extends EventEmitter{

  constructor(){
    super();
    console.log("TableStore constructor called");
    this.setMaxListeners(Infinity);
    this.tableModel = {
      name: "",
      header: [],
      matrix: []
    }
    tableRetriever.getTableModel(0, model => {
      this.setTableModel(model);
    });
  }

  setTableModel(model){
    //console.log("setting table model...");
    this.tableModel = model;
    this.emit("change");
    //console.log("the new table name is: " + this.tableModel.name);
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
    return this.tableModel.matrix.length;
  }

  getColumnCount(){
    return this.tableModel.header.length;
  }

  getHeader(){
    return this.tableModel.header;
  }

  getMatrix(){
    return this.tableModel.matrix;
  }

  getValue(row, col){
    if(row<0){
      console.log('row is < 0');
      return this.tableModel.header[col];
    }
    else return this.tableModel.matrix[row][col];
  }

  getName(){
    return this.tableModel.name;
  }

  // data manipulation

  addColumn(){
    var cc = this.getColumnCount() + 1;
    this.tableModel.header.push("col " + cc);
    this.tableModel.matrix.map(row => {
      row.push("cell");
    });
    this.emit("change");
  }

  addRow(){
    var newRow = [];
    this.tableModel.header.map(cell => {
      newRow.push("cell");
    });
    this.tableModel.matrix.push(newRow);
    this.emit("change");
  }

  removeColumn(){
    this.tableModel.header.pop();
    this.tableModel.matrix.map(row => row.pop());
    this.emit("change");
  }

  removeRow(){
    this.tableModel.matrix.pop();
    this.emit("change");
  }

  editCell(row, col, val){
    if(row<0) this.tableModel.header[col] = val;
    else this.tableModel.matrix[row][col] = val;
    this.emit("change");
  }

  editName(name){
    this.tableModel.name = name;
    this.emit("change");
    //console.log("editName called in store: " + name); // DEBUG
  }
}

console.log('about to create a new tablestore...');
const tableStore = new TableStore;
dispatcher.register(tableStore.handleAction.bind(tableStore));
//window.dispatcher = dispatcher;
export default tableStore;