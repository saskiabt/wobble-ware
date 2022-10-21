import React, { useContext } from "react";
import vessel from "../../images/vessel1.png";
import NavButton from "../NavButton/NavButton";
import NavMenu from "../NavMenu/NavMenu";
import "./LandingPage.css";
import { GlobalContext } from "../../context/GlobalState";

function LandingPage() {
  const { isBars } = useContext(GlobalContext);
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="LandingPage">
      <div className="left">
        <div className="top">
          <h1>wobble</h1>
          {isBars && <NavButton />}
        </div>
        <img src={vessel} alt="white pottery vessel" className="vessel" />
        <div className="lower">
          <h1>ware</h1>
          <p>by Sivim Ly</p>
        </div>
      </div>
      {!isBars && <NavMenu />}
    </div>
  );
}

export default LandingPage;
