import React from "react";

import * as CommentActions from "actions/CommentActions.js";

export default class CommentButtons extends React.Component{

  cancelComment(){
    CommentActions.deactivateCommentFrame();
  }

  render(){
    return(
      <p class="btn-toolbar clearfix">
        <button class="btn btn-primary pull-right" type="button">Comment</button>
        <button class="btn btn-default pull-right" type="button" onClick={this.cancelComment.bind(this)}>Cancel</button>
      </p>
    );
  }
}