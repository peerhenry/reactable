import * as React from "react";

//declare function require(name:string);
//var NavBar = require<React.Component<{}, {}>>("./NavBar/NavBar.jsx");
/*import NavBar = require("./NavBar/NavBar.jsx");
var Header = require("./Header.jsx");
var Body = require("./Body.jsx");
var SetLinkModal = require("./Modal/SetLinkModal.jsx");//*/

import NavBar from "./NavBar/NavBar.jsx";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import SetLinkModal from "./Modal/SetLinkModal";//*/

export default class Layout extends React.Component<{}, {}>{
  render(){
    return(
      <div>
        <NavBar/>
        <Header/>
        <Body/>
        <SetLinkModal/>
      </div>
    )
  }
}