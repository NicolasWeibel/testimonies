import React from "react";
import "../stylesheets/testimony.css"

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img className="testimony-img" src={require(`../images/testimony-${props.image}.jpg`)} alt="Nicolás's portrait"/>
      <div className="testimony-text-container">
        <p className="testimony-name">{props.fullName} in {props.country}</p>
        <p className="testimony-position">{props.position} at {props.company}</p>
        <p className="testimony-text">{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;
