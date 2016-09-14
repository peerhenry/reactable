import React from "react";
import {panelStyle} from "../../../js/stores/StyleStore.js";
import CommentFrame from "./CommentFrame.jsx";

export default class CommentsPanel extends React.Component{
  render(){
    return(
      <div style={panelStyle}>
        <h4>Comments</h4>
        <CommentFrame/>
        <p class="btn-toolbar clearfix">
          <button class="btn btn-primary pull-right" type="button">Comment</button>
          <button class="btn btn-default pull-right" type="button">Cancel</button>
        </p>
      </div>
    );
  }
}