import React from "react";
import "../stylesheets/testimony.css"

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img className="testimony-img" src={require(`../images/testimony-${props.image}.jpg`)} alt={`${props.fullName}'s portrait`} />
      <div className="testimony-text-container">
        <p className="testimony-name"><b>{props.fullName}</b> in {props.country}</p>
        <p className="testimony-position">{props.position} at <b>{props.company}</b></p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
