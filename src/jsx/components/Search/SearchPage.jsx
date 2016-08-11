import React from "react";

export default class TablePage extends React.Component{

  componentDidMount(){
    $('.clickable-row').click(function(){
      console.log('row was clicked with link: ' + $(this).data("href")); // DEBUG
    });
  }

  render(){
    const clickableStyle = {
      "cursor": "pointer"
    };

    return(
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created By</th>
              <th>Last modified</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr class="clickable-row" data-href="www.google.com" style={clickableStyle}>
              <td>Muppet Table 2</td>
              <td>Jim Henson</td>
              <td>00-00-00</td>
              <td>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </td>
            </tr>
            <tr class="clickable-row" style={clickableStyle}>
              <td>Muppet Table</td>
              <td>Jim Henson</td>
              <td>00-00-00</td>
              <td>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </td>
            </tr>
            <tr class="clickable-row" style={clickableStyle}>
              <td>Muppet Table</td>
              <td>Jim Henson</td>
              <td>00-00-00</td>
              <td>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}