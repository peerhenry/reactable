import React from "react";
import ButtonGroup from "./ButtonGroup";
import SaveButton from "./SaveButton";

export default class Footer extends React.Component{
  render(){
      var lightGreyBackground = {
        "borderTop": "1px solid #222",
        "background": "#eee"
      };

    return(
      <footer class="footer" style={lightGreyBackground}>
        <div class="container">
          <br/>
          <center class="row"><ButtonGroup/></center>
          <br/>
          <center class="row"><SaveButton/></center>
          <br/>
          <div class="small">
            <p className="text-muted">
              ReacTable was created by <span><i class="fa fa-copyright" aria-hidden="true"></i> PeerHenry 2016</span>
              &nbsp;<a href="https://github.com/peerhenry/reactable">Github Project</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}