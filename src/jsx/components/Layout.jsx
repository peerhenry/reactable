import React from "react";
import NavBar from "./NavBar.jsx"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"

export default class Layout extends React.Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}