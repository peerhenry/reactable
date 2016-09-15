import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class CommentStore extends EventEmitter{
  constructor(){
    super();
  }

  // Actions

  handleAction(action){
    switch(action.type){
      case "ACTIVATE_COMMENT_FRAME":
        this.activateCommentFrame();
        break;
      case "DEACTIVATE_COMMENT_FRAME":
        this.deactivateCommentFrame();
        break;
      default:
    }
  }

  activateCommentFrame(){
    this.emit("activateComment");
  }

  deactivateCommentFrame(){
    this.emit("cancelComment");
  }
}

const commentStore = new CommentStore;
dispatcher.register(commentStore.handleAction.bind(commentStore));
export default commentStore;