import dispatcher from "../dispatcher"

export function editCell(row, col, text){
  dispatcher.dispatch({
    type: "EDIT_CELL",
    row: row,
    col: col,
    val: text
  });
}

export function editTableName(text){
  dispatcher.dispatch({
    type: "EDIT_NAME",
    val: text
  });
}

export function setTable(tableModel){
  dispatcher.dispatch({
    type: "SET_TABLE",
    val: tableModel
  })
}