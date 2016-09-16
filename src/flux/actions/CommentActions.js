import commentsDispatcher from "dispatchers/CommentsDispatcher"

export function activateCommentFrame(){
  commentsDispatcher.dispatch({
    type: "ACTIVATE_COMMENT_FRAME"
  });
}

export function deactivateCommentFrame(){
  commentsDispatcher.dispatch({
    type: "DEACTIVATE_COMMENT_FRAME"
  });
}