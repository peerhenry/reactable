import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class TablePageDisplayStore extends EventEmitter{

  constructor(){
    super();
    this.showHeader = true;
    this.showTitle = true;
    this.showDetails = true;
    this.showComments = true;
  }

  // DATA RETRIEVAL

  titleIsVisible(){
    return this.showTitle;
  }

  headerIsVisible(){
    return this.showHeader;
  }  

  detailsAreVisible(){
    return this.showDetails;
  }

  commentsAreVisible(){
    return this.showComments;
  }

  // ACTIONS

  handleAction(action){
    switch(action.type){
      case "TOGGLE_TITLE":
        this.toggleTitle();
        break;
      case "TOGGLE_HEADER":
        this.toggleHeader();
        break;
      case "TOGGLE_DETAILS":
        this.toggleDetails();
        break;
      case "TOGGLE_COMMENTS":
        this.toggleComments();
        break;
      default:
    }
  }

  toggleTitle(){
    this.showTitle = !this.showTitle;
    this.emit("change");
  }

  toggleHeader(){
    this.showHeader = !this.showHeader;
    this.emit("change");
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.emit("change");
  }

  toggleComments(){
    this.showComments = !this.showComments;
    this.emit("change");
  }
}

const pageStore = new TablePageDisplayStore;
dispatcher.register(pageStore.handleAction.bind(pageStore));
export default pageStore;