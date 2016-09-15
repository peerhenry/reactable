import React from "react";

export default class Stars extends React.Component{

  constructor(){
    super();
  }

  addStar(remainder, stars, index)
  {
    if(remainder>1.5) stars.push(<FullStar key={index}/>);
    else if(remainder>0.5) stars.push(<HalfStar key={index}/>);
    else stars.push(<EmptyStar key={index}/>);
  }

  getStarsArray(){
    var stars = [];
    var remainder = this.props.rating;
    for(var i = 0; i < 5; i++){
      this.addStar(remainder, stars, i);
      remainder -= 2;
    }
    return stars;
  }

  render(){
    return(
      <div style={{"color": "orange"}}>
        {this.getStarsArray()}
      </div>
    );
  }
}

class FullStar extends React.Component{
  render(){
    return(<i class="fa fa-star" aria-hidden="true"></i>);
  }
}

class HalfStar extends React.Component{
  render(){
    return(<i class="fa fa-star-half-o" aria-hidden="true"></i>);
  }
}

class EmptyStar extends React.Component{
  render(){
    return(<i class="fa fa-star-o" aria-hidden="true"></i>);
  }
}