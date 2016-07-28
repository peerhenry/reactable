import dispatcher from "../dispatcher"

export function addRow(){
  dispatcher.dispatch({
    type: "ADD_ROW"
  });
}

export function addColumn(){
  dispatcher.dispatch({
    type: "ADD_COLUMN"
  });
}

export function removeRow(){
  dispatcher.dispatch({
    type: "REMOVE_ROW"
  });
}

export function removeColumn(){
  dispatcher.dispatch({
    type: "REMOVE_COLUMN"
  });
}