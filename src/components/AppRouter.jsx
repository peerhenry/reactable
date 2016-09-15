import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import NavBarAndPage from "./NavBarAndPage";
import SearchPageNavBar from "components/NavBar/SearchPageNavBar";
import SearchPage from "components/Search/SearchPage";

export default class AppRouter extends React.Component{
  render(){
    return(
      <Router history = {hashHistory}>
        <Route path="/" component={NavBarAndPage}>
          <Route path="Search" components={{ 
            pageComponent: SearchPage, 
            navBar: SearchPageNavBar 
          }}>
          </Route>
        </Route>
      </Router>
    );
  }
}