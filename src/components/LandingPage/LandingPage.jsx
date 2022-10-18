import React, { useContext } from "react";
import vessel from "../../images/vessel1.png";
import NavButton from "../NavButton/NavButton";
import "./LandingPage.css";
import { GlobalContext } from "../../context/GlobalState";

function LandingPage() {
  const { isBars } = useContext(GlobalContext);

  return (
    <div className={isBars ? "LandingPage" : "hidden"}>
      {/* <div className="LandingPage"> */}
      <div className="top">
        <h1>wobble</h1>
        <NavButton />
      </div>
      <img src={vessel} alt="white pottery vessel" className="vessel" />
      <div className="lower">
        <h1>ware</h1>
        <p>by Sivim Ly</p>
      </div>
    </div>
  );
}

export default LandingPage;
