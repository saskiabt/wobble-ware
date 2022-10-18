import React, { useContext } from "react";
import "./WorksPage.css";
import ovalVesselTan from "../../images/oval-vessel-plant.jpeg";
import sivimVessel1 from "../../images/sivim-vessel-1.jpeg";
// import sivimVessel2 from "../../images/sivim-vessel-2.jpeg";
import filmEffectTan from "../../images/film-effect-template.jpg";
import twoVesselsTan from "../../images/two-vessels-tan.jpeg";
import { GlobalContext } from "../../context/GlobalState";

function WorksPage() {
  const { isBars } = useContext(GlobalContext);
  // const magnify = (event) => {
  //   const { target } = event;
  // };
  return (
    <div className={isBars ? "WorksPage" : "hidden"}>
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
