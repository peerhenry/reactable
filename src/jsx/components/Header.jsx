import React from "react";
import PageStore from "../../js/stores/PageStore.js";

export default class Header extends React.Component{
  constructor(){
    super();
    this.setHeaderVisibility = this.setHeaderVisibility.bind(this);
    this.state = {
      hidden: !PageStore.headerIsVisible()
    };
  }

  setHeaderVisibility(){
    this.setState({
      hidden: !PageStore.headerIsVisible()
    });
  }

  componentWillMount(){
    PageStore.on("change", this.setHeaderVisibility);
  }

  componentWillUnmount(){
    PageStore.removeListener("change", this.setHeaderVisibility);
  }

  render(){
    const { hidden } = this.state;
    var jumboStyle = hidden ? { display: "None"} : {  };
    var h1Style = {
      "color": "inherit",
      "text-shadow": "1px 1px 2px #666",
      "font-style": "italic",
      "font-weight": "bold",
      "font-size": "42",
      display: hidden ? "None" : "block"
    };
    return(
      <div class="jumbotron">
        <div class="container">
          <h1 style={h1Style}>ReacTable</h1>
          
        </div>
      </div>
    );
  }
}