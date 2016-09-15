import React from "react";

export default class SetLinkModalFooter extends React.Component{
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
    return(
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
          onClick={this.save.bind(this)}>
          Save
        </button>
      </div>
    );
  }
}