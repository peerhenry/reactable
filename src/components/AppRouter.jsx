import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import TablePage from "./Table/TablePage";
import SearchPage from "./Search/SearchPage";
import Dummy from "./Dummy";

export default class AppRouter extends React.Component{
  render(){
    return(
      <Router history = {hashHistory}>
        <Route path="/" component={TablePage}>
          <Route path="Search" component={SearchPage}>
          </Route>
        </Route>
        <Route path="/:uid" component={Dummy}></Route>
      </Router>
    );
  }
}