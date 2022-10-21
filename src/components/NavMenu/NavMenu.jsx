import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NavButton from "../NavButton/NavButton";
import "./NavMenu.css";

function NavMenu() {
  const { isBars } = useContext(GlobalContext);

  return (
    <div className={`NavMenu ${isBars ? "null" : "menu-active"}`}>
      {!isBars && <NavButton />}
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
