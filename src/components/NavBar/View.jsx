import React from "react"
import {connect} from "react-redux"

@connect((store) => {return{
  showTitle: store.tableDisplay.showTitle,
  showHeader: store.tableDisplay.showHeader,
  showDetails: store.tablePageDisplay.showDetails,
  showComments: store.tablePageDisplay.showComments,
}})
export default class View extends React.Component{
  dispatch(typeName){
    this.props.dispatch({type: typeName});
  }

  toggleTitle(){
    this.dispatch("TOGGLE_TITLE")
  }

  toggleHeader(){
    this.dispatch("TOGGLE_HEADER")
  }

  toggleDetails(){
    this.dispatch("TOGGLE_DETAILS")
  }

  toggleComments(){
    this.dispatch("TOGGLE_COMMENTS")
  }

  render(){
  const checkedClass = "fa fa-check-square";
  const uncheckedClass = "fa fa-square";

  var showHeaderClass = this.props.showHeader ? checkedClass: uncheckedClass;
  var showTitleClass = this.props.showTitle ? checkedClass: uncheckedClass;
  var showDetailsClass = this.props.showDetails ? checkedClass: uncheckedClass;
  var showCommentsClass = this.props.showComments ? checkedClass: uncheckedClass;
  
  return(
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        View <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li onClick={this.toggleTitle.bind(this)}>
          <a href="#" role="button">
            <i class={showTitleClass}></i> Show Title
          </a>
        </li>
        <li onClick={this.toggleHeader.bind(this)}>
          <a href="#" role="button">
            <i class={showHeaderClass}></i> Show Header
          </a>
        </li>
        <li onClick={this.toggleDetails.bind(this)}>
          <a href="#" role="button">
            <i class={showDetailsClass}></i> Show Details
          </a>
        </li>
        <li onClick={this.toggleComments.bind(this)}>
          <a href="#" role="button">
            <i class={showCommentsClass}></i> Show Comments
          </a>
        </li>
      </ul>
    </li>
   )
  }
}