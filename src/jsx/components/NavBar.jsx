import React from "react";
import * as PageDisplayActions from "../../js/actions/PageDisplayActions.js";
import PageStore from "../../js/stores/PageStore";

export default class NavBar extends React.Component{

  constructor(){
    super();
    this.state = {
      showHeaderChecked: PageStore.headerIsVisible(),
      showTitleChecked: PageStore.titleIsVisible()
    }
    this.dropdownIsOpen = false;
  }

  componentWillMount(){
    PageStore.on("change", () => {
      this.setState({
        showHeaderChecked: PageStore.headerIsVisible(),
        showTitleChecked: PageStore.titleIsVisible()
      });
    });
  }

  toggleHeader(){
    PageDisplayActions.toggleHeader();
  }

  toggleTitle(){
    PageDisplayActions.toggleTitle();
  }

  render(){
  const checkedClass = "fa fa-check-square";
  const uncheckedClass = "fa fa-square";

  var showHeaderClass = this.state.showHeaderChecked ? checkedClass: uncheckedClass;
  var showTitleClass = this.state.showTitleChecked ? checkedClass: uncheckedClass;
  //
  return(

    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <ul class="nav navbar-nav">
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
            </ul>
          </li>
          <li><a href="">button2</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <div className="form-group">
            <input type="text" class="form-control" placeholder="search"/>
            <button type="submit" class="btn btn-default">
              <i class="fa fa-search fa-lg"></i>
            </button>
          </div>
        </form>
      </div>
    </nav>
   )
  }
}