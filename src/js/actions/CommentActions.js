import dispatcher from "../dispatcher"

export function activateCommentFrame(){
  dispatcher.dispatch({
    type: "ACTIVATE_COMMENT_FRAME"
  });
}

export function deactivateCommentFrame(){
  dispatcher.dispatch({
    type: "DEACTIVATE_COMMENT_FRAME"
  });
}