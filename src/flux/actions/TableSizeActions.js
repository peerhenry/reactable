import tableSizeDispatcher from "dispatchers/TableSizeDispatcher";

export function addRow(){
  tableSizeDispatcher.dispatch({
    type: "ADD_ROW"
  });
}

export function addColumn(){
  tableSizeDispatcher.dispatch({
    type: "ADD_COLUMN"
  });
}

export function removeRow(){
  tableSizeDispatcher.dispatch({
    type: "REMOVE_ROW"
  });
}

export function removeColumn(){
  tableSizeDispatcher.dispatch({
    type: "REMOVE_COLUMN"
  });
}