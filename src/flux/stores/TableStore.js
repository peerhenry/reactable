import { EventEmitter } from "events";
import Immutable from 'immutable';

import tableContentDispatcher from "dispatchers/TableContentDispatcher";
import tableSizeDispatcher from "dispatchers/TableSizeDispatcher";
import tableRetriever from "../api/tableretriever.js"; // this should not be here,

class TableStore extends EventEmitter{

  constructor(){
    super();
    this.setMaxListeners(Infinity);
    this.tableModel = {
      uid: "",
      name: "",
      header: [],
      matrix: []
    }
    this.loadTableModel('0');
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
      case "SET_TABLE":
        this.setTableModel(action.val);
        break;
      case "LOAD_TABLE":
        this.loadTableModel(action.val);
        break;
      default:
    }
  }

  // data retrieval

  getTableModel(){
    return this.tableModel;
  }

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
      return this.tableModel.header[col];
    }
    else return this.tableModel.matrix[row][col];
  }

  getName(){
    return this.tableModel.name;
  }

  // data manipulation

  // this should not be here, should be called from an action
  loadTableModel(uid){
    tableRetriever.getTableModel(uid, model => {
      this.setTableModel(model);
    });
  }

  setTableModel(model){
    this.tableModel = model;
    this.emit("change");
  }

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
  }
}

const tableStore = new TableStore;
tableContentDispatcher.register(tableStore.handleAction.bind(tableStore));
tableSizeDispatcher.register(tableStore.handleAction.bind(tableStore));
export default tableStore;