import React from "react";
import {panelStyle} from "../../../js/stores/StyleStore.js";
import Stars from "../Search/Stars.jsx";

export default class DescriptionPanel extends React.Component{
  render(){
    const starsStyle = {
      float: "right"
    }
    return(
      <div style={panelStyle}>
        <h4>Details</h4>
        <div>
          <strong class="col-sm-6">
            Last edited on Feb 29, 2016
          </strong>
          <div class="col-sm-6">
            <div style={starsStyle}>
              <Stars rating={7.3} />
            </div>
          </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    );
  }
}