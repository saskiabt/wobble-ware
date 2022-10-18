import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./NavMenu.css";
import NavButton from "../NavButton/NavButton";

function NavMenu() {
  const { isBars } = useContext(GlobalContext);

  return (
    <div className={isBars ? "hidden" : "NavMenu"}>
      <NavButton className="btn" />
      <button type="button" className="btn">
        Home
      </button>
      <button type="button" className="btn">
        Products
      </button>
      <button type="button" className="btn">
        Contact
      </button>
    </div>
  );
}

export default NavMenu;
