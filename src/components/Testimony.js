import React from "react";
import "../stylesheets/testimony.css"

function Testimony() {
  return (
    <div className="testimony-container">
      <img className="testimony-img" src={require("../images/testimony-nicolas.jpg")} alt="Nicolás's portrait"/>
      <div className="testimony-text-container">
        <p className="testimony-name">Nicolás Weibel in Argentina</p>
        <p className="testimony-position">Software Engineer at Spotify</p>
        <p className="testimony-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, harum est! Consequuntur, provident sit. Tempora!</p>
      </div>
    </div>
  );
}

export default Testimony;
