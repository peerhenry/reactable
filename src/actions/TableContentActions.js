import dispatcher from "../dispatcher"

export function editCell(row, col, text){
  dispatcher.dispatch({
    type: "EDIT_CELL",
    row: row,
    col: col,
    val: text
  });
}

export function attachLink(row, col, link){
  dispatcher.dispatch({
    type: "ATTACH_LINK",
    row: row,
    col: col,
    link: link
  });
}

export function detachLink(row, col){
  dispatcher.dispatch({
    type: "DETACH_LINK",
    row: row,
    col: col
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

export function loadTable(uid){
  console.log('loadTable called in TableContentActions with uid: ' + uid);
  dispatcher.dispatch({
    type: "LOAD_TABLE",
    val: uid
  });
}