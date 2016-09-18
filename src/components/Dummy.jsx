import React from "react";

export default class Dummy extends React.Component{
  render(){
    return(
      <div>
        The uid is: {this.props.params.uid}
      </div>
    );
  }
}