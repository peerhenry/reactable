import React from "react";
import SearchEntry from "./SearchEntry.jsx";
import SearchStore from "../../../js/stores/SearchStore.js"

export default class TablePage extends React.Component{

  constructor(){
    super();
    this.state = {
      results: SearchStore.getSearchResults()
    }
  }

  render(){

    var entries = this.state.results.map((entry, index) => 
      <SearchEntry
        uid={entry.uid}
        name={entry.name}
        creator={entry.creator}
        lastModified={entry.lastModified}
        rating={entry.rating}
        key={index}
      />
    )

    return(
      <div class="container">
        <h2>Search</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created By</th>
              <th>Last modified</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {entries}
          </tbody>
        </table>
      </div>
    )
  }
}