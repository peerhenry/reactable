import React from "react";
import {panelStyle} from "stores/StyleStore.js";
import CommentStore from "stores/CommentStore.js";
import CommentFrame from "./CommentFrame";
import CommentButtons from "./CommentButtons";

export default class CommentsPanel extends React.Component{
  constructor(){
    super();
    this.state = {
      isActive: false
    };
  }

  componentWillMount(){
    CommentStore.on("activateComment", () => {
      this.setState({
        isActive: true
      });
    });
    CommentStore.on("cancelComment", () => {
      this.setState({
        isActive: false
      });
    });
  }

  render(){
    return(
      <div style={panelStyle}>
        <h4>Comments</h4>
        <CommentFrame/>
        { (this.state.isActive)? (<CommentButtons/>) : null }
      </div>
    );
  }
}