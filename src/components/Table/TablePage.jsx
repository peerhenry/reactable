import React from "react";
// logic
import {loadTable} from "actions/TableContentActions.js";
import TablePageDisplayStore from "stores/TablePageDisplayStore.js";
// components
import TableEditButtons from "./TableEditButtons";
import TablePanel from "./TablePanel";
import DetailsPanel from "./DetailsPanel";
import CommentsPanel from "./Comments/CommentsPanel";
import SetLinkModal from "../Modal/SetLinkModal";

export default class TablePage extends React.Component{
  constructor(){
    super();
    this.state = {
      showDetails: TablePageDisplayStore.detailsAreVisible(),
      showComments: TablePageDisplayStore.commentsAreVisible()
    };
  }

  componentWillMount(){
    TablePageDisplayStore.on("change", () => {
      this.setState({
        showDetails: TablePageDisplayStore.detailsAreVisible(),
        showComments: TablePageDisplayStore.commentsAreVisible()
      });
    });
  }

  componentDidMount(){
    loadTable('0');
  }

  render(){
    return(
      <div>
        <div class="container margin-top">
          <center class="row"><TableEditButtons/></center>
        </div>
        <div class="container margin-top">
          <div id="page-container">
            <TablePanel/>
            {(this.state.showDetails) ? (<DetailsPanel/>) : null}
            {(this.state.showComments) ? (<CommentsPanel/>) : null}
          </div>
        </div>
        <SetLinkModal/>
      </div>
    )
  }
}