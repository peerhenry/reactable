import React from "react";

export default class SetLinkModal extends React.Component{

  constructor(){
    super();
  }

  render(){
    const styleObj = {display: "block"};
    return(
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header"><p>Attach link to cell</p></div>
            <div class="modal-body">

              <form class="form-horizontal">
                <div class="form-group">
                  <label for="link" class="col-sm-2 control-label text-muted">http://</label>
                  <div class="col-sm-10">
                    <input class="col-sm-4 form-control" value=""/>
                  </div>
                </div>
                <div></div>
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-default">Save</button>
            </div>
          </div>
        </div>
    );
  }
}