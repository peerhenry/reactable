import React from "react";

export default class SetLinkModal extends React.Component{

  constructor(){
    super();
  }

  render(){
    const styleObj = {display: "block"};
    return(
      <div id="setLinkModal" class="modal fade" tabIndex="-1" role="dialog">
        <div class="modal dialog">
          <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body">
              <p>This be the body</p>
              <input value="enter link here"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-default">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}