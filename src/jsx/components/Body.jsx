import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import TablePage from "./Table/TablePage.jsx"
import SearchPage from "./Search/SearchPage.jsx"

export default class Body extends React.Component{
  render(){
    return(
      <Router history = {hashHistory}>
        <Route path="/" component={TablePage}>
        </Route>
        <Route path="/Search" component={SearchPage}>
        </Route>
      </Router>
    )
  }
}