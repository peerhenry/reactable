import React from "react";

export default class Footer extends React.Component{
  render(){
      var lightGreyBackground = {
        "background": "#eee"
      };

    return(
      <footer class="footer" style={lightGreyBackground}>
        <div className="container">
          <p></p>
          <p>
            ReacTable was created by PeerHenry
          </p>
          <p className="text-muted">
            <i class="fa fa-copyright" aria-hidden="true"></i> PeerHenry 2016
          </p>
          <p>
            <a href="https://github.com/peerhenry/reactable">Github Project</a>
          </p>
        </div>
      </footer>
    )
  }
}