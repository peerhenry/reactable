import tableContentDispatcher from "dispatchers/TableContentDispatcher"

export function editCell(row, col, text){
  tableContentDispatcher.dispatch({
    type: "EDIT_CELL",
    row: row,
    col: col,
    val: text
  });
}

export function attachLink(row, col, link){
  tableContentDispatcher.dispatch({
    type: "ATTACH_LINK",
    row: row,
    col: col,
    link: link
  });
}

export function detachLink(row, col){
  tableContentDispatcher.dispatch({
    type: "DETACH_LINK",
    row: row,
    col: col
  });
}

export function editTableName(text){
  tableContentDispatcher.dispatch({
    type: "EDIT_NAME",
    val: text
  });
}

export function setTable(tableModel){
  tableContentDispatcher.dispatch({
    type: "SET_TABLE",
    val: tableModel
  })
}

export function loadTable(uid){
  tableContentDispatcher.dispatch({
    type: "LOAD_TABLE",
    val: uid
  });
}