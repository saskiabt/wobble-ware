import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import NavButton from "../NavButton/NavButton";
import "./NavMenu.css";

function NavMenu() {
  const { isBars } = useContext(GlobalContext);

  return (
    <div className={`NavMenu ${isBars ? "null" : "menu-active"}`}>
      {!isBars && <NavButton />}
      <Link to="/">
        <button type="button" className="btn">
          Home
        </button>
      </Link>
      <Link to="/products">
        <button type="button" className="btn">
          Shop
        </button>
      </Link>
      <Link to="/contact">
        <button type="button" className="btn">
          Contact
        </button>
      </Link>
    </div>
  );
}

export default NavMenu;
