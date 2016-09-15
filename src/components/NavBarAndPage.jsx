import * as React from "react";

import TablePage from "./Table/TablePage";
import NavBar from "./NavBar/NavBar";

import Footer from "./Footer";
import SetLinkModal from "components/Modal/SetLinkModal";

export default class NavBarAndPage extends React.Component{
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
      <div>
        { this.props.navBar || <NavBar showViewMenu={true}/> }
        <div style={this.state}></div>
        { this.props.pageComponent || <TablePage/> }
      </div>
    )
  }
}