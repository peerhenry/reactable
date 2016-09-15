import * as React from "react";
import NavBar from "./NavBar/NavBar.jsx";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      "height": "50px"
    };
  }

  handleResize(e){
    var h = $('#navMenu').height().toString() + "px";
    this.setState({
      "height": h
    });
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render(){
    return(
      <div id="layout">
        <NavBar/>
        <div style={this.state}></div>
        <Body/>
      </div>
    )
  }
}