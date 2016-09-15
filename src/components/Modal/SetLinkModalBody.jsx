import React from "react";

export default class SetLinkModalBody extends React.Component{
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return(
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
    );
  }
}