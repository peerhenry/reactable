import React from "react";
import PageStore from "../../js/stores/PageStore.js"
import ButtonGroup from "./ButtonGroup"

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
    var jumboStyle = hidden ? { display: "None"} : {  };
    var h1Style = {
      "color": "inherit",
      "text-shadow": "2px 2px 2px #666",
      "font-style": "italic",
      "font-weight": "bold"
    };
    return(
      <div class="jumbotron" style={jumboStyle}>
        <div class="container">
          <h1 style={h1Style}>ReacTable</h1>
          <center class="row"><ButtonGroup/></center>
        </div>
      </div>
    );
  }
}