import React from "react"
import { connect } from "react-redux";

// components
import TableEditButtons from "./TableEditButtons"
import TablePanel from "./TablePanel"
import DetailsPanel from "./DetailsPanel"
import CommentsPanel from "./Comments/CommentsPanel"
import SetLinkModal from "../Modal/SetLinkModal"

@connect((state)=>{return{
  showTitle: state.tableDisplay.showTitle,
  showHeader: state.tableDisplay.showHeader,
  showDetails: state.tablePageDisplay.showDetails,
  showComments: state.tablePageDisplay.showComments,
}})
export default class TablePageContent extends React.Component{
  render(){
    const panelProps = {
      showTitle: this.props.showTitle,
      showHeader: this.props.showHeader
    };
    return(
      <div>
        <div class="container margin-top">
          <center class="row"><TableEditButtons/></center>
        </div>
        <div class="container margin-top">
          <div id="page-container">
            <TablePanel {...panelProps}/>
            {(this.props.showDetails) ? (<DetailsPanel/>) : null}
            {(this.props.showComments) ? (<CommentsPanel/>) : null}
          </div>
        </div>
        <SetLinkModal/>
      </div>
    )
  }
}