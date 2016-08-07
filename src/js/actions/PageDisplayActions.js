import dispatcher from "../dispatcher"

export function toggleHeader(){
  //console.log('PageDisplayAction.toggleHeader() called'); // DEBUG
  dispatcher.dispatch({
    type: "TOGGLE_HEADER"
  });
}

export function toggleTitle(){
  dispatcher.dispatch({
    type: "TOGGLE_TITLE"
  });
}