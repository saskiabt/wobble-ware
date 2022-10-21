import React from "react";
import "./WorksPage.css";
import ovalVesselTan from "../../images/oval-vessel-plant.jpeg";
import sivimVessel1 from "../../images/sivim-vessel-1.jpeg";
import filmEffectTan from "../../images/film-effect-template.jpg";
import twoVesselsTan from "../../images/two-vessels-tan.jpeg";
import NavMenu from "../NavMenu/NavMenu";

function WorksPage() {
  return (
    <div className="WorksPage">
      <div className="grid">
        <button className="card" type="button">
          <img src={twoVesselsTan} alt="person with pottery" />
        </button>
        <button className="card" type="button">
          <img src={ovalVesselTan} alt="two vases" />
        </button>
        <button className="card" type="button">
          <img src={sivimVessel1} alt="person with pottery" />
        </button>
        <button className="card" type="button">
          <img src={filmEffectTan} alt="vase" />
        </button>
      </div>
    </div>
  );
}

export default WorksPage;
