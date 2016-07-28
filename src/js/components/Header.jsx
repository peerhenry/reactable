import React from "react";

export default class Header extends React.Component{

  constructor(){
    super();
    this.state = {
      hidden: false
    };
  }

  handleClick(event){
    console.log("header clicked!");
    const oldHidden = this.state.hidden;
    this.setState({
      hidden: !oldHidden
    });
  }

  render(){
    const { hidden } = this.state;
    var styleObj = hidden ? { display: "None"} : { };
    return(
      <div class="jumbotron" style={styleObj}>
        <div class="container">
          <h1 onClick={this.handleClick.bind(this)}>ReacTable</h1>
          <p>By PeerHenry</p>
        </div>
      </div>
    );
  }
}