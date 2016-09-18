import React from "react"
import NavBarAndContent from "../NavBarAndContent"

export default class SearchPage extends React.Component{
  render(){
    return(
      <NavBarAndContent isSearhPage={true}/>
    );
  }
}