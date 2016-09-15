import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import AppRouter from "./AppRouter";
import Footer from "./Footer";
import SetLinkModal from "components/Modal/SetLinkModal";

import "styles/style.scss";
import "styles/stickyfooter.scss";

export default class App extends React.Component{
  render(){ 
    return(
      <div class="full-height">
        <div class="wrapper">
          <AppRouter />
        </div>
        <footer id="footer">
          <Footer/>
        </footer>
      </div>
    );
  }
}