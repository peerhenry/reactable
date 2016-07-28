import React from "react";

import TableHeader from "./TableHeader.jsx"
import TableBody from "./TableBody.jsx"

export default class Table extends React.Component{
  render(){
    return(
      <table class="table">
        <TableHeader/>
        <TableHeader/>
        <TableBody/>
      </table>
    )
  }
}