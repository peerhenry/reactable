import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class PageStore extends EventEmitter{

  constructor(){
    super();
    this.showHeader = true;
    this.showTitle = true;
  }

  handleAction(action){
    console.log('PageStore.handleAction() called: ' + action.type);
    switch(action.type){
      case "TOGGLE_HEADER":
        console.log('case TOGGLE_HEADER reached!');
        this.toggleHeader();
        break;
      case "TOGGLE_TITLE":
        break;
      default:
    }
  }

  toggleHeader(){
    console.log('PageStore.toggleHeader() called');
    this.showHeader = !this.showHeader;
    this.emit("change");
  }

  toggleTitle(){
    this.showTitle = !this.showTitle;
    this.emit("change");
  }

  headerIsVisible(){
    return this.showHeader;
  }

  titleIsVisible(){
    return this.showTitle;
  }

}

const pageStore = new PageStore;
dispatcher.register(pageStore.handleAction.bind(pageStore));
window.dispatcher = dispatcher;
export default pageStore;