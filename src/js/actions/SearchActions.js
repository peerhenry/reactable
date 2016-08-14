import dispatcher from "../dispatcher"

export function search(searchTerm){
  dispatcher.dispatch({
    type: "SEARCH",
    val: searchTerm
  });
}

export function open(uid){
  console.log('open called in SearchActions with uid: ' + uid);
  dispatcher.dispatch({
    type: "OPEN",
    val: uid
  });
}