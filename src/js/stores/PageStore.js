import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class PageStore extends EventEmitter{

  constructor(){
    super();
    this.showHeader = false;
    this.showTitle = true;
    this.showTableHeader = true;
  }

  handleAction(action){
    switch(action.type){
      case "TOGGLE_HEADER":
        this.toggleHeader();
        break;
      case "TOGGLE_TITLE":
        this.toggleTitle();
        break;
      case "TOGGLE_TABLE_HEADER":
        this.toggleTableHeader();
        break;
      default:
    }
  }

  toggleHeader(){
    this.showHeader = !this.showHeader;
    this.emit("change");
  }

  toggleTitle(){
    this.showTitle = !this.showTitle;
    this.emit("change");
  }

  toggleTableHeader(){
    this.showTableHeader = !this.showTableHeader;
    this.emit("change");
  }

  headerIsVisible(){
    return this.showHeader;
  }

  titleIsVisible(){
    return this.showTitle;
  }

  tableHeaderIsVisible(){
    return this.showTableHeader;
  }
}

const pageStore = new PageStore;
dispatcher.register(pageStore.handleAction.bind(pageStore));
export default pageStore;