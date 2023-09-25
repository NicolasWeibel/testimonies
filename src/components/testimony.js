import React from "react";

function Testimony() {
  return (
    <div className="testimony-container">
      <img className="testimony-img" src={"../images/testimony-nico"} alt="Nicolás's portrait"/>
      <div className="testimony-text-container">
        <p className="testimony-name">Nicolás Weibel in Argentina</p>
        <p className="testimony-position">Software Engineer at Spotify</p>
        <p className="testimony-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, harum est! Consequuntur, provident sit. Tempora!</p>
      </div>
    </div>
  );
}

export default Testimony;