import React from "react";
import * as DisplayActions from "../../../js/actions/TablePageDisplayActions.js";
import TablePageDisplayStore from "../../../js/stores/TablePageDisplayStore.js";

export default class View extends React.Component{

  constructor(){
    super();
    this.state = {
      showTitle: TablePageDisplayStore.titleIsVisible(),
      showHeader: TablePageDisplayStore.headerIsVisible(),
      showDetails: TablePageDisplayStore.detailsAreVisible(),
      showComments: TablePageDisplayStore.commentsAreVisible()
    }
  }

  componentWillMount(){
    TablePageDisplayStore.on("change", () => {
      this.setState({
        showTitle: TablePageDisplayStore.titleIsVisible(),
        showHeader: TablePageDisplayStore.headerIsVisible(),
        showDetails: TablePageDisplayStore.detailsAreVisible(),
        showComments: TablePageDisplayStore.commentsAreVisible()
      });
    });
  }

  toggleTitle(){
    DisplayActions.toggleTitle();
  }

  toggleHeader(){
    DisplayActions.toggleHeader();
  }

  toggleDetails(){
    DisplayActions.toggleDetails();
  }

  toggleComments(){
    DisplayActions.toggleComments();
  }

  render(){
  const checkedClass = "fa fa-check-square";
  const uncheckedClass = "fa fa-square";

  var showHeaderClass = this.state.showHeader ? checkedClass: uncheckedClass;
  var showTitleClass = this.state.showTitle ? checkedClass: uncheckedClass;
  var showDetailsClass = this.state.showDetails ? checkedClass: uncheckedClass;
  var showCommentsClass = this.state.showComments ? checkedClass: uncheckedClass;
  
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