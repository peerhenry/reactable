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

export function toggleDetails(){
  dispatcher.dispatch({
    type: "TOGGLE_DETAILS"
  })
}

export function toggleComments(){
  dispatcher.dispatch({
    type: "TOGGLE_COMMENTS"
  })
}