import React from "react";
import ReactDOM from "react-dom";

import * as CommentActions from "actions/CommentActions.js";
import CommentStore from "stores/CommentStore.js";

// on hover
// on click needs to show comment buttons
// typing needs to change the content

export default class CommentFrame extends React.Component{
  constructor(){
    super();
    this.state = {
      text: ""
    };
  }

  componentWillMount(){
    CommentStore.on("cancelComment", () => {
      this.setState({
        text: ""
      });
    });
  }

  onChange(event){
    console.log("onChange called in CommentFrame");
    this.setState({
      text: event.target.value
    });
  }

  activate(event){
    CommentActions.activateCommentFrame();
  }

  render(){
    const textAreaStyle = {
      resize: "none",
      cursor: "pointer",
      marginBottom: "8px",
    };
    return (
      <textarea 
        rows={4}
        cols={40}
        placeholder="Add a comment..."
        class="form-control"
        style={textAreaStyle}
        value={this.state.text}
        onChange={this.onChange.bind(this)}
        onClick={this.activate.bind(this)}
      />
    );
  }
}