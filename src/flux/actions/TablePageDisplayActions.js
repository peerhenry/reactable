import tablePageDisplayDispatcher from "dispatchers/TablePageDisplayDispatcher"

export function toggleHeader(){
  tablePageDisplayDispatcher.dispatch({
    type: "TOGGLE_HEADER"
  });
}

export function toggleTitle(){
  tablePageDisplayDispatcher.dispatch({
    type: "TOGGLE_TITLE"
  });
}

export function toggleDetails(){
  tablePageDisplayDispatcher.dispatch({
    type: "TOGGLE_DETAILS"
  })
}

export function toggleComments(){
  tablePageDisplayDispatcher.dispatch({
    type: "TOGGLE_COMMENTS"
  })
}