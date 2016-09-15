import React from "react";

export default class SetLinkModal extends React.Component{

  constructor(){
    super();
    this.state = {
      value: ""
    }
  }

  handleChange(event){
    console.log("handling modal change");
    this.setState({
      value: event.target.value
    });
  }

  close(event){
    this.setState({
      value: ""
    });
  }

  save(event){
    this.setState({
      value: ""
    });
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
                    <input 
                      class="col-sm-4 form-control"
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
                <div></div>
              </form>

            </div>
            <div class="modal-footer">
              <button 
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                onClick={this.close.bind(this)}>
                Close
              </button>
              <button
                type="button"
                class="btn btn-default"
                onClick={this.save.bind(this)}
                >
                Save
              </button>
            </div>
          </div>
        </div>
    );
  }
}