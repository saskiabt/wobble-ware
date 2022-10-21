import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./NavButton.css";
import { GlobalContext } from "../../context/GlobalState";

function NavButton() {
  const { isBars, toggleIsBars } = useContext(GlobalContext);

  const toggleNav = () => {
    toggleIsBars();
  };
  return (
    <button type="button" className="NavButton" onClick={toggleNav}>
      {isBars ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faX} />
      )}
    </button>
  );
}

export default NavButton;
