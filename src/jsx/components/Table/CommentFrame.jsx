import React from "react";

// on hover
// on click needs to show comment buttons
// typing needs to change the content

export default class CommentFrame extends React.Component{
  render(){
    const commentFrameStyle = {
      border: "1px solid #d5d5d5",
      borderRadius: "2px",
      boxShadow: "0 0 1px rgba(0,0,0,0.05) inset",
      marginBottom: "8px",
      marginLeft: "11px",
      marginTop: "20px",
      minHeight: "28px",
      padding: "10px"
    };
    return(
      <div style={commentFrameStyle}>
        Add a comment...
      </div>
    );
  }
}