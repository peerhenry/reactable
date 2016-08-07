import React from "react";
import PageStore from "../../js/stores/PageStore.js"

export default class Header extends React.Component{

  constructor(){
    super();
    this.state = {
      hidden: !PageStore.headerIsVisible()
    };
  }

  componentWillMount(){
    PageStore.on("change", () => this.setState({
      hidden: !PageStore.headerIsVisible()
    }));
  }

  render(){
    const { hidden } = this.state;
    var styleObj = hidden ? { display: "None"} : { };
    return(
      <div class="jumbotron" style={styleObj}>
        <div class="container">
          <h1>ReacTable</h1>
          <p>By PeerHenry</p>
        </div>
      </div>
    );
  }
}