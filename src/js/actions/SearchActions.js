import dispatcher from "../dispatcher"

export function search(searchTerm){
  dispatcher.dispatch({
    type: "SEARCH",
    val: searchTerm
  });
}