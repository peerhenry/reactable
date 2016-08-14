import dispatcher from "../dispatcher"

export function toggleHeader(){
  dispatcher.dispatch({
    type: "TOGGLE_HEADER"
  });
}

export function toggleTitle(){
  dispatcher.dispatch({
    type: "TOGGLE_TITLE"
  });
}

export function toggleTableHeader(){
  dispatcher.dispatch({
    type: "TOGGLE_TABLE_HEADER"
  })
}