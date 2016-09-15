import React from "react";

import SetLinkModalBody from "./SetLinkModalBody";
import SetLinkModalFooter from "./SetLinkModalFooter";

import "styles/modal.scss";

export default class SetLinkModal extends React.Component{


  render(){
    const styleObj = {display: "block"};
    return(
      <div class="modal fade" id="setLinkModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">Attach link to cell</div>
            <SetLinkModalBody/>
            <SetLinkModalFooter/>            
          </div>
        </div>
      </div>
    );
  }
}