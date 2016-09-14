import React from "react";
import SaveButton from "./SaveButton";

export default class Footer extends React.Component{
  render(){
    var lightGreyBackground = {
      "borderTop": "1px solid #ccc",
      "background": "white"
    };

    return(
      <footer class="footer" style={lightGreyBackground}>
        <div class="container">
          <br/>
          <center class="row"><SaveButton/></center>
          <br/>
          <div class="small">
            <p className="text-muted">
              <i>ReacTable</i> was created by <span><i class="fa fa-copyright" aria-hidden="true"></i> PeerHenry 2016</span>
              &nbsp;-&nbsp;<a href="https://github.com/peerhenry/reactable">Github Project</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}