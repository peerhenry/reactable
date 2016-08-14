import React from "react";
import * as PageDisplayActions from "../../../js/actions/PageDisplayActions.js";
import PageStore from "../../../js/stores/PageStore";

export default class Options extends React.Component{

  constructor(){
    super();
    this.state = {
      showHeaderChecked: PageStore.headerIsVisible(),
      showTitleChecked: PageStore.titleIsVisible(),
      showTableHeaderChecked: PageStore.tableHeaderIsVisible()
    }
    this.dropdownIsOpen = false;
  }

  componentWillMount(){
    PageStore.on("change", () => {
      this.setState({
        showHeaderChecked: PageStore.headerIsVisible(),
        showTitleChecked: PageStore.titleIsVisible(),
        showTableHeaderChecked: PageStore.tableHeaderIsVisible()
      });
    });
  }

  toggleHeader(){
    PageDisplayActions.toggleHeader();
  }

  toggleTitle(){
    PageDisplayActions.toggleTitle();
  }

  toggleTableHeader(){
    PageDisplayActions.toggleTableHeader();
  }

  render(){
  const checkedClass = "fa fa-check-square";
  const uncheckedClass = "fa fa-square";

  var showHeaderClass = this.state.showHeaderChecked ? checkedClass: uncheckedClass;
  var showTitleClass = this.state.showTitleChecked ? checkedClass: uncheckedClass;
  var showTableHeaderClass = this.state.showTableHeaderChecked ? checkedClass: uncheckedClass;
  
  return(
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        Options <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li onClick={this.toggleHeader.bind(this)}>
          <a href="#" role="button">
            <i class={showHeaderClass}></i> Show header
          </a>
        </li>
        <li onClick={this.toggleTitle.bind(this)}>
          <a href="#" role="button">
            <i class={showTitleClass}></i> Show title
          </a>
        </li>
        <li onClick={this.toggleTableHeader.bind(this)}>
          <a href="#" role="button">
            <i class={showTableHeaderClass}></i> Show table header
          </a>
        </li>
      </ul>
    </li>
   )
  }
}