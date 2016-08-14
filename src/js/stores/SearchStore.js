import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js"

class SearchStore extends EventEmitter{

  constructor(){
    super();
    this.resultList = [
      {
        uid: 0,
        name: "Muppets1",
        creator: "Jim Henson",
        lastModified: "01-01-2016",
        rating: 4.75
      },
      {
        uid: 0,
        name: "Muppets2",
        creator: "Jim Henson",
        lastModified: "02-01-2016",
        rating: 6
      },
      {
        uid: 0,
        name: "Muppets3",
        creator: "Jim Henson",
        lastModified: "03-01-2016",
        rating: 8
      }
    ];
  }

  handleAction(action){
    switch(action.type){
      case "SEARCH":
        this.search(action.val);
        break;
      default:
    }
  }

  search(seachTerm){
    console.log('search called in SearchStore.')
  }

  getSearchResults(){
    return this.resultList;
  }
}

const searchStore = new SearchStore;
dispatcher.register(searchStore.handleAction.bind(searchStore));
export default searchStore;