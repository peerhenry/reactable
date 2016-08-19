import React from "react";
import NavBar from "./NavBar/NavBar.jsx"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import SetLinkModal from "./Modal/SetLinkModal.jsx"

export default class Layout extends React.Component{
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